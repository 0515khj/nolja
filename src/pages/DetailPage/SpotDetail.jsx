import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import skiData from '../../data/skiResorts.json'
import { getCampingDetail } from '../../api/campingService';
import { getSpotDetail } from '../../api/tourService';
import { SpotDetailWrap } from './spotDetailStyle';

const SpotDetail = () => {
    const {id} = useParams();
    const location = useLocation();
    // const navigate = useNavigate();

    // location.state로 SpotList에서 넘겨준 type값 받아옴
    const type = location.state.type;

    const [detailInfo, setDeatailInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchDetail = async() =>{
            setLoading(true);
            try {
                // 시작 데이터는 빈값
                let data = null;

                if(type === 'SKI'){
                    data = skiData.find(ski => ski.contentid === id);
                }else if(type === 'CAMPING'){
                    data = await getCampingDetail(id);
                }else{
                    data = await getSpotDetail(id);
                }
                if(data) setDeatailInfo(data);

            } catch (error) {
                console.error('디테일 정보 로드 실패 : ', error)
            }finally{
                setLoading(false);
            }
        }
        fetchDetail();
    },[id, type])

    if(loading) return <div>로딩중 테스트</div>

    if(!detailInfo) return <div>정보가 없음 테스트</div>

    return (
        <SpotDetailWrap>
            <div className="section-title">
                <h2>{detailInfo.areaCode}</h2>
            </div>
        </SpotDetailWrap>
    );
};

export default SpotDetail;