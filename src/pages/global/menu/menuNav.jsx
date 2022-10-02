import React from 'react';
import { Link } from "react-router-dom"
import LogoSvg from '../../../assets/svg/logo';
import MenuBar from './menubar';

import './style.css'

const MenuNav = (props) => {

    return(
        <nav className="menu-nav">
            <div className="logo">
                <LogoSvg />
            </div>
            <ul className="links">
                <li><Link to="/whyrocktech">Why RockTech</Link></li>
                <li><Link to="">Product</Link></li>
                <li><Link to="">Sustainability</Link></li>
                <li><Link to="">Investors</Link></li>
                <li><Link to="">Career</Link></li>
                <li><Link to="">DE|EN</Link></li>
            </ul>
            <MenuBar/>
        </nav>
    );
}

export default MenuNav