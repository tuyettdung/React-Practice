import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';
import HomeTemplate from './templates/HomeTemplate';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<HomeTemplate />}>
    <Route path='/glasses' element={<BaiTapThuKinh />}></Route>



    </Route>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
