import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/main/main'
import Menu from './pages/global/menu/menuNav'
import Footer from './pages/global/footer/footer';

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/hello" element={<div>hello</div>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
