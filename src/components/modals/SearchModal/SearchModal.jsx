import React, { useEffect, useState } from 'react';
import { CloseBtn, RecommendItem, RecommendList, RecommendSection, RecommendTitle, SearchBox, SearchModalWrap } from './searchModalStyle';
import { useNavigate } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";


const SearchModal = ({isOpen, onClose}) => {

    const [keyword, setKeyword] =useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return () =>{
            document.body.style.overflow = 'unset';
        }
    },[])

    if(!isOpen) return null;

    // 추천 여행지
    const recommendations = [
        { id: 1, name: '제주도', emoji: '🏝️' },
        { id: 2, name: '부산', emoji: '🏖️' },
        { id: 3, name: '강릉', emoji: '🌊' },
        { id: 4, name: '경주', emoji: '🏛️' },
        { id: 5, name: '여수', emoji: '🌅' },
        { id: 6, name: '전주', emoji: '🍜' },
    ];

     // 검색 처리
    const handleSearch = (searchKeyword) => {
        navigate(`/search?keyword=${searchKeyword}`);
        onClose();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && keyword.trim()) {
            handleSearch(keyword);
        }
    };


    return (
        <SearchModalWrap onClick={onClose}>
            
            <SearchBox onClick={(e) => e.stopPropagation()}>
                <input 
                    type="text" 
                    placeholder="어디로 놀러갈까요?"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    autoFocus
                />

                <CloseBtn>
                    <button onClick={onClose}>
                        <RiCloseLargeFill />
                    </button>
                </CloseBtn>

                <RecommendSection>
                    <RecommendTitle>🔥 인기 여행지</RecommendTitle>
                    <RecommendList>
                        {recommendations.map(item => (
                            <RecommendItem 
                                key={item.id}
                                onClick={() => handleSearch(item.name)}
                            >
                                <span className="emoji">{item.emoji}</span>
                                <span className="name">{item.name}</span>
                            </RecommendItem>
                        ))}
                    </RecommendList>
                </RecommendSection>
            </SearchBox>
        </SearchModalWrap>
    );
};

export default SearchModal;