import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/MainHome/Main';
import Layout from './components/Layout';
import SpotList from './pages/SpotList/SpotList';
import { ScrollTop } from './components/ScrollTop';
import SpotDetail from './pages/DetailPage/SpotDetail';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
     <ScrollTop/>
        <Routes>
          <Route path='/' element={<Layout/>}> 
               <Route index element={<Main/>}/>
               {/* <Route index element={<Test/>}/> */}
               <Route path='/category/:code' element={<SpotList/>}/>
               <Route path='/spots' element={<SpotList/>}/>
               <Route path='/detail/:id' element={<SpotDetail/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;