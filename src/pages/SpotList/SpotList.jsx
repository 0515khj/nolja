import React, { useEffect, useState } from 'react';
import {CategoryFilter, NoData, PageBtn, SpotCard, SpotLeft, SpotListWrap, SpotRight, SpotsItem } from './spotListStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllSpots, getBeaches, getMountin, getValleys } from '../../api/tourService';
import { areas, getAreaName } from '../../data/areaData';
import { categories, getCategoryName } from '../../data/categoryData';
import { FaCaretRight } from "react-icons/fa";

const SpotList = () => {

    const { code } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const urlArea = searchParams.get('area') || 'all' ; // 기본 디폴트값이 전국
    const urlCategory = searchParams.get('category') || code || 'A01010900'; // 기본 계곡


    const [selectArea, setSelectArea] = useState(urlArea);
    const [selectCategory, setSelectCategory] = useState(urlCategory);
    const [allSpots, setAllSpots] = useState([]);
    

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // 기본 페이지번호 1
    const limit = 20; // 한페이지에 20개씩 보여줌

    
    useEffect(()=>{
        const fetchAllSpots = async()=>{
            setLoading(true);

            let data = [];
            let fetchFunction = getAllSpots;

            if(selectCategory === 'all'){
                fetchFunction = getAllSpots;
            }else if(selectCategory === 'A01010900'){
                fetchFunction = getValleys;
            }else if(selectCategory === 'A01011200'){
                fetchFunction = getBeaches;
            }else if(selectCategory === 'A01010400'){
                fetchFunction = getMountin;
            }
            // 전체는 getAllSpots 호출 (tourService에 추가 필요)
            // 일단은 getValleys로
            // fetchFunction = getValleys;
            
            // 전국
            if (selectArea === 'all'){
                const areaCodes = [1, 2, 3, 4, 5, 6, 7, 8, 31, 32, 33, 34, 35, 36, 37, 38, 39];
                data = [];
                const batch = [];
                for(let i =0; i < areaCodes.length; i+=3){
                    batch.push(areaCodes.slice(i, i + 3));
                }

                for(const batchs of batch) {
                    const result = await Promise.all(
                        batchs.map(code => fetchFunction(code))
                    );
                    data.push(...result.flat());

                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                // data = areaData;
            }else {
                data = await fetchFunction(selectArea);
            }

            setAllSpots(data);
            setLoading(false);
            //데이터를 새로 불러오니까 페이지도 1로 초기화시켜야함
            setPage(1);
        }
        fetchAllSpots();
    },[selectArea, selectCategory])


    //카테고리 클릭
    const cateClick = (categoryCode) =>{
        setSelectCategory(categoryCode);
        setAllSpots([]);
        navigate(`/spots?area=${selectArea}&category=${categoryCode}`);
        setPage(1);
    }

    // 지역 클릭
    const areaClick = (areaCode)=>{
        setSelectArea(areaCode);
        setSelectCategory('all');
        setAllSpots([]);
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
                    <h2>{getAreaName(selectArea)}</h2>
                    <FaCaretRight />
                    <span>{getCategoryName(selectCategory)}</span>
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
                            className={selectCategory === 'all' ? 'active':''}
                            disabled={selectArea === 'all'}
                            >
                            전체
                            </button>
                            {categories.map(cate => (
                                <button key={cate.id}
                                onClick={()=> cateClick(cate.code)}
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
                                    <SpotCard key={spot.contentid}>
                                        <img src={spot.firstimage || 'images/no-image.jpg'} 
                                        alt={spot.title} />
                                        <div className="info">
                                            <span>{getAreaName(spot.areacode)}</span>
                                            <h3>{spot.title}</h3>
                                            <span>{getCategoryName(spot.cat3)}</span>
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