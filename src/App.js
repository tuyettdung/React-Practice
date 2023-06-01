import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';
import HomeTemplate from './templates/HomeTemplate';
import ProductList from './ShoeShop/ProductList';
import Form from './ReactForm/FormRegister';
import ReactForm from './ReactForm/ReactForm';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<HomeTemplate />}>
    <Route path='/glasses' element={<BaiTapThuKinh />}></Route>
    <Route path='/shoeshop' element={<ProductList />}></Route>
    <Route path='/react-form' element={<ReactForm />}></Route>



    </Route>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
