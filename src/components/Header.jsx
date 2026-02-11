import React, { useState } from 'react';
import { Area, HeaderRight, HeaderWrap, Logo, SearchBox } from './common';
import { FaListUl } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from './modals/SearchModal/SearchModal';
import { areas } from '../data/areaData'



const Header = () => {

    const [subMenu, setSubMenu] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();

    const areaClick = (areaCode) => {
        navigate(`/spots?area=${areaCode}&category=A01010900`);
        setSubMenu(false);
    }

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
                        {areas.map((area)=>(
                            <li key={area.code}
                                onClick={()=> areaClick(area.code)}
                            >{area.name}</li>
                        ))}
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