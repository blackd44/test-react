import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/main/main'
import Menu from './pages/global/menu/menuNav'
import Footer from './pages/global/footer/footer';

import WhyRocktech from './pages/whyRocktech/index';

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/whyrocktech" element={<WhyRocktech />}/>
        <Route path="/hello" element={<div>hello</div>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
