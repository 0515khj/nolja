import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/MainHome/Main';
import Layout from './components/Layout';
import SpotList from './pages/SpotList/SpotList';
import Test from './pages/MainHome/Test';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}> 
               <Route index element={<Main/>}/>
               {/* <Route index element={<Test/>}/> */}
               <Route path='/category/:code' element={<SpotList/>}/>
               <Route path='/spots' element={<SpotList/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;