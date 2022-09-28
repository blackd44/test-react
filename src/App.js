import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/main/main.js'
import Menu from './pages/global/menu/menuNav'

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/*" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
