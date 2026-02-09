import React, { useState } from 'react';
import { Area, HeaderRight, HeaderWrap, Logo, SearchBox } from './common';
import { FaListUl } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SearchModal from './modals/SearchModal/SearchModal';



const Header = () => {

    const [subMenu, setSubMenu] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    return (
        <>
        <HeaderWrap onMouseLeave={()=> setSubMenu(false)}>
                <div className="container">
                    
                    <Link to={"/"}><Logo>NOLJA</Logo></Link>

                    <SearchBox onClick={()=> setSearchModal(true)}>
                        <input type="text" placeholder='어디로 놀러갈까요?'/>
                        <i><CiSearch className='search' /></i>
                    </SearchBox>

                    <HeaderRight>
                        <ul>
                            <li onMouseEnter={()=> setSubMenu(true)}>지역</li>
                            <li>고객센터</li>
                            <li className='ham'><FaListUl /></li>
                        </ul>
                    </HeaderRight>
                    
                </div>
                {subMenu && (
                    <Area>
                    <ul>
                        <li>서울</li>
                        <li>인천</li>
                        <li>대전</li>
                        <li>대구</li>
                        <li>광주</li>
                        <li>부산</li>
                        <li>울산</li>
                        <li>세종</li>
                        <li>경기</li>
                        <li>강원</li>
                        <li>충북</li>
                        <li>충남</li>
                        <li>경북</li>
                        <li>경남</li>
                        <li>전북</li>
                        <li>전남</li>
                        <li>제주</li>
                    </ul>
                </Area>
                )}

       

        </HeaderWrap>

        {searchModal && ( 
                   <SearchModal 
                       isOpen = {searchModal}
                       onClose={()=> setSearchModal(false)}
                   />
               )}
    
    </>

    );
};

export default Header;