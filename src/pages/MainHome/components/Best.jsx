import { useEffect, useState } from 'react';
import { BestBox, BestWrap } from './BestStyle';
import { getBestSpots } from '../../../api/tourService';

const Best = () => {

    const [best, setBest] = useState([]);

    useEffect(()=>{
        const fetchBest = async()=>{
            const spots = await getBestSpots();
            setBest(spots);
        }
        fetchBest();
    },[])

    return (
        <BestWrap>
            <div className="container">
                <div className="section-title">
                    <h2>인기 추천 스팟</h2>
                    <p>여행객들이 가장 좋아 하고 만족한 곳 입니다.</p>
                </div>
                <BestBox>
                    {best.map(spot => (
                        <div key={spot.contentid}>
                            <img src={spot.firstimage} alt={spot.title} />
                            <h3>{spot.title}</h3>
                        </div>
                    ))}
                </BestBox>

            </div>
        </BestWrap>
    );
};

export default Best;