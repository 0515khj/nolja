import React, { useEffect, useState } from 'react';
import {CategoryFilter, PageBtn, SpotLeft, SpotListWrap, SpotRight, SpotsItem } from './spotListStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getBeaches, getValleys } from '../../api/tourService';
import { areas, getAreaName } from '../../data/areaData';

const SpotList = () => {

    const { code } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const urlArea = searchParams.get('area') || '1' ; // 기본 디폴트값이 서울임
    const urlCategory = searchParams.get('category') || code || 'all'; // 기본 전체


    const [selectArea, setSelectArea] = useState(urlArea);
    const [selectCategory, setSelectCategory] = useState(urlCategory);
    const [allSpots, setAllSpots] = useState([]);
    

    // const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // 기본 페이지번호 1
    const limit = 20; // 한페이지에 20개씩 보여줌

    const getCateName = (code) => {
        if (code === 'all') return '전체';
        const cateMap = {
            'A01010900': '계곡',
            'A01010200': '해수욕장',
            'A01010XXX': '캠핑장',
            'A01010YYY': '스키장',
        };
        return cateMap[code] || '전체';
    };


    // const titleClick = (areaName)=>{
    //     setSelectArea(areaName);
    // }

    useEffect(()=>{
        const fetchAllSpots = async()=>{
            // setLoading(true);

            let data = [];

            let fetchFunction = getValleys;

            if(code === 'A01010900'){
                fetchFunction = getValleys;
            }else if(code === 'A01010200'){
                fetchFunction = getBeaches;
            }

            data = await fetchFunction(selectArea);
          


            setAllSpots(data);
            // setLoading(false);
            //데이터를 새로 불러오니까 페이지도 1로 초기화시켜야함
            setPage(1);
        }
        fetchAllSpots();
    },[selectArea, selectCategory])


    //카테고리 클릭
    const cateClick = (categoryCode) =>{
        setSelectCategory(categoryCode);
        navigate(`/spots?area=${selectArea}&category=${categoryCode}`);
        setPage(1);
    }

    // 지역 클릭
    const areaClick = (areaCode)=>{
        setSelectArea(areaCode);
        setSelectCategory('all');
        navigate(`/spots?area=${areaCode}&category=all`);
        setPage(1);
    }

    const offset = (page - 1) * limit; // 시작점

    // 전체에서 해당 범위만 잘라낸다
    const currentSpots = allSpots.slice(offset, offset + limit);

    // 총 페이지수 
    const numpages = Math.ceil(allSpots.length / limit);

    return (
        <SpotListWrap>
            <div className="inner">
                <div className="section-title">
                    <h1>{getAreaName(selectArea)} &gt; </h1>
                    <span>{getCateName(selectCategory)}</span>
                </div>
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
                        <CategoryFilter>
                            <button onClick={()=> cateClick()}
                            className={selectCategory === '' ? 'active':''}
                            >
                                
                            </button>
                        </CategoryFilter>

                        <SpotsItem>
                            {currentSpots.map(spot =>(
                                <div key={spot.contentid}>
                                    {spot.title}
                                </div>
                            ))}
                        </SpotsItem>
                        {allSpots.length > 0 && (
                            <PageBtn>
                                <button onClick={()=> setPage(page - 1)}
                                disabled={page === 1}>
                                    &lt;
                                </button>

                                {/* <span>{page} / {numpages}</span> */}
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