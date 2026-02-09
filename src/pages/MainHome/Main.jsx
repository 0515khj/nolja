import React from 'react';
import IntroSection from './components/IntroSection';
import Category from './components/Category';
import Banner from './components/Banner';
import Best from './components/Best';

const Main = () => {
    return (
        <div>
            <IntroSection/>
            <Category/>
            <Best/>
            <Banner/>
        </div>
    );
};

export default Main;