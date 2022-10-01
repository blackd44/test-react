import React from 'react';
import { Link } from "react-router-dom"
import { useEffect } from "react";
import $ from 'jquery'
import LogoSvg from '../../../assets/svg/logo';


const MenuNav = (props) => {

    useEffect(() => {
        $(".menu-bar.add").click(() => {
            $(".links").animate({left: '0'}, 600);
            $(".menu-bar.add").css({"display": "none"});
            $(".menu-bar.remove").css({"display": "block"});
        });
        $(".menu-bar.remove").click(() => {
            $(".links").animate({left: '100vw'}, 600);
            $(".menu-bar.add").css({"display": "block"});
            $(".menu-bar.remove").css({"display": "none"});
        });
    }, [])

    let menuBar = (view) => {
        return {
            display: view? "block": "none",
        }
    }

    return(
        <nav className="menu-nav">
            <div className="logo">
                <LogoSvg />
            </div>
            <div className="links">
                <Link to="#">Why RockTech</Link>
                <Link to="#">Product</Link>
                <Link to="#">Sustainability</Link>
                <Link to="#">Investors</Link>
                <Link to="#">Career</Link> 
                <Link to="#">DE|EN</Link>
            </div>
            <div className="menu-bar add" style={menuBar(true)}>
                <svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="1.74179" x2="30" y2="1.74179" stroke="#FFFEFB" stroke-width="2" stroke-linecap="round"/>
                    <line x1="1" y1="8.74179" x2="30" y2="8.74179" stroke="#FFFEFB" stroke-width="2" stroke-linecap="round"/>
                    <line x1="1" y1="16.7418" x2="30" y2="16.7418" stroke="#FFFEFB" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div className="menu-bar remove" style={menuBar(false)}>
                <svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="1.74179" x2="30" y2="1.74179" stroke="#FFFEFB" stroke-width="2" stroke-linecap="round"/>
                    <line x1="1" y1="8.74179" x2="30" y2="8.74179" stroke="#FFFEFB" stroke-width="2" stroke-linecap="round"/>
                    <line x1="1" y1="16.7418" x2="30" y2="16.7418" stroke="#FFFEFB" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </nav>
    );
}

export default MenuNav