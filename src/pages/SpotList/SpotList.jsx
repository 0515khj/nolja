import React, { useEffect, useState } from 'react';
import {CategoryFilter, NoData, PageBtn, SpotCard, SpotLeft, SpotListWrap, SpotRight, SpotsItem } from './spotListStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {getBeaches, getMountin, getValleys } from '../../api/tourService';
import { areas, getAreaName } from '../../data/areaData';
import { categories, getCategoryName } from '../../data/categoryData';
import { FaCaretRight } from "react-icons/fa";
import { getCampingList } from '../../api/campingService';
import { getSkiList } from '../../api/skiService';

const SpotList = () => {

    const { code } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);

    const selectArea = Number(searchParams.get('area')) || '1' ; // 기본 디폴트값이 전국
    const selectCategory = searchParams.get('category') || code || 'A01010900'; // 기본 계곡

    const [allSpots, setAllSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // 기본 페이지번호 1
    const limit = 20; // 한페이지에 20개씩 보여줌

    console.log(allSpots)
    useEffect(()=>{
        let mount = true;

        const fetchAllSpots = async()=>{
            setLoading(true);

            let data = [];
            let fetchFunction;

            if(selectCategory === 'A01010900'){
                fetchFunction = getValleys;
            }else if(selectCategory === 'A01011200'){
                fetchFunction = getBeaches;
            }else if(selectCategory === 'A01010400'){
                fetchFunction = getMountin;
            }else if(selectCategory === 'CAMPING'){
                fetchFunction = getCampingList;
            }else if(selectCategory === 'SKI'){
                fetchFunction = getSkiList;
            }
            
                data = await fetchFunction(selectArea);

            if(mount){
                setAllSpots(data);
                setLoading(false);
                //데이터를 새로 불러오니까 페이지도 1로 초기화시켜야함
                setPage(1);
            }
        }
        fetchAllSpots();
         return () => {
            mount = false;
    };
    },[selectArea, selectCategory])


    //카테고리 클릭
    const cateClick = (categoryCode = 'all') =>{
        navigate(`/spots?area=${selectArea}&category=${categoryCode}`);
    }

    // 지역 클릭
    const areaClick = (areaCode)=>{
        navigate(`/spots?area=${areaCode}&category=A01010900`);
    }

    const offset = (page - 1) * limit; // 시작점

    // 전체에서 해당 범위만 잘라낸다
    const currentSpots = allSpots.slice(offset, offset + limit);

    // 총 페이지수 
    const numpages = Math.ceil(allSpots.length / limit);

    //디테일 페이지로 보냄
    const goDetail = (item) =>{

        console.log('🔍 클릭한 item 전체:', item);  // 👈 전체 객체 확인
    console.log('📦 키 목록:', Object.keys(item));  // 👈 키 목록만
    console.log('🆔 contentid:', item.contentid);  // 👈 소문자
    console.log('🆔 contentId:', item.contentId);

        let endId = '';
        let endType ='';
        
        if (selectCategory === 'SKI') {
            endId = item.contentid;
            endType = 'SKI';
        } else if (selectCategory === 'CAMPING') {
            endId = item.contentId;
            endType = 'CAMPING';
        }else{
            endId = item.contentid;
            endType = item.contenttypeid;
        }

        navigate(`/detail/${endId}`,{
            state:{
                type:endType,
                areaCode:selectArea,
                categoryCode:selectCategory
            }
        })

    }

    return (
        <SpotListWrap>
            <div className="inner">
                
                <div className="container">
                    <SpotLeft>
                        <h3>지역</h3>
                        <ul>
                            {areas.map((area)=>(
                                <li key={area.code}
                                onClick={()=> areaClick(area.code)}
                                className={selectArea === area.code ? 'active':''}
                                >
                                    {area.name}
                                </li>
                            ))}
                        </ul>
                    </SpotLeft>
                    <SpotRight>
                        <div className="section-title">
                            <h2>{getAreaName(selectArea)}</h2>
                            <FaCaretRight />
                            <span>{getCategoryName(selectCategory)}</span>
                        </div>
                        <CategoryFilter>
                            {categories.map(cate => (
                                <button key={cate.id}
                                // onClick={()=> {
                                //     if(selectCategory !== cate.code) {
                                //         cateClick(cate.code)
                                //     }
                                // }}
                                onClick={()=>cateClick(cate.code)}
                                className={selectCategory === cate.code ? 'active' : ''}
                                >
                                 {cate.name}
                                </button>
                            ))}
                        </CategoryFilter>

                        <SpotsItem>
                            {loading ? (
                                <NoData>
                                    <div className="loading">
                                        <h3>🔍 데이터를 불러오는 중</h3>
                                        <img src="/images/loading.gif" alt="" />
                                    </div>
                                </NoData>
                            ) : currentSpots.length > 0 ? (
                                currentSpots.map(spot =>(
                                    <SpotCard key={spot.contentid || spot.contentId}
                                              onClick={()=>goDetail(spot)}
                                    >
                                        <img src={spot.firstimage || spot.firstImageUrl || 'images/no-image.jpg'} 
                                        alt={spot.title || spot.facltNm} />
                                        <div className="info">
                                            <span>{getAreaName(spot.areacode || spot.doNm)}</span>
                                            <h3>{spot.title || spot.facltNm}</h3>
                                            <span>{spot.cat3 ?
                                                getCategoryName(spot.cat3)
                                                : selectCategory === 'CAMPING' ? '캠핑장' : '스키장'
                                            }</span>
                                        </div>
                                    </SpotCard>
                            ))
                        ) : (
                            <NoData>
                              <h3>등록된 정보가 없습니다.</h3>
                              <span>{getAreaName(selectArea)} 지역에 {getCategoryName(selectCategory)} 정보가 없습니다.</span>          
                            </NoData>
                        )}
                        </SpotsItem>
                        {allSpots.length > 0 && (
                            <PageBtn>
                                <button onClick={()=> setPage(page - 1)}
                                disabled={page === 1}>
                                    &lt;
                                </button>

                                {Array(numpages).fill().map((_,idx)=>(
                                    <button key={idx + 1} onClick={()=> setPage(idx + 1)}
                                    style={{
                                        background: page === idx + 1 ? '#333':'#fff',
                                        color : page === idx + 1 ? '#fff':'#333'
                                    }}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}

                                <button onClick={()=> setPage(page + 1)}
                                disabled={page === numpages}>
                                    &gt;
                                </button>
                            </PageBtn>
                        )}
                    </SpotRight>
                </div>
            </div>


        </SpotListWrap>
    );
};

export default SpotList;