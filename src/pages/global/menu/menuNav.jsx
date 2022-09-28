import React from 'react';
import { Link } from "react-router-dom"
import { useEffect } from "react";
import $ from 'jquery'


const MenuNav = (props) => {

    useEffect(() => {
        $(".menu-bar.add").click(() => {
            $(".links").animate({left: '0'}, 600);
            $(".menu-nav").css({"position": "fixed"});
            $(".menu-bar.add").css({"display": "none"});
            $(".menu-bar.remove").css({"display": "block"});
        });
        $(".menu-bar.remove").click(() => {
            $(".links").animate({left: '100vw'}, 600);
            $(".menu-nav").css({"position": "absolute"});
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
                <svg width="110" height="20" viewBox="0 0 96 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6116_615)">
                        <path d="M0 0.434631H6.87982C10.389 0.434631 12.5911 2.4036 12.5911 5.99185C12.5911 8.06034 11.513 9.80471 9.72433 10.7515L13.7844 17.8783H9.03734L6.67558 13.0688C6.26214 12.2215 5.80415 11.8732 5.13944 11.8732H3.94742V17.8783H0V0.434631ZM6.55922 8.38447C7.95796 8.38447 8.73779 7.58693 8.73779 6.21645C8.73779 4.84598 7.95796 4.07399 6.55922 4.07399H3.9437V8.38447H6.55922ZM24.3566 8.55796C25.4806 6.71408 26.9251 5.119 29.7238 5.119C32.8196 5.119 35.2507 7.4363 35.6641 10.6507H32.1326C31.8343 9.45503 30.9171 8.68169 29.7015 8.68169C28.3944 8.68169 27.7978 9.47924 26.857 11.0246L24.7007 14.5375C23.7377 16.1326 22.3155 18.1755 19.1281 18.1755C15.6882 18.1755 13.0046 15.3592 13.0046 11.6473C13.0046 7.93392 15.573 5.119 19.013 5.119C21.5579 5.12034 22.8428 6.29042 24.3566 8.55796ZM19.2184 14.6142C19.4016 14.6142 19.6083 14.5886 19.7693 14.5644C20.71 14.3398 21.2596 13.5422 22.0629 12.2713L22.4529 11.6486L22.0629 11.0259C21.0999 9.50614 20.5268 8.68304 19.2184 8.68304C17.7046 8.68304 16.489 9.90423 16.489 11.6486C16.489 13.393 17.7046 14.6142 19.2184 14.6142ZM36.6717 0.434631H40.3419V9.1309L43.6221 5.41757H48.1637L43.9439 10.2015L48.5313 17.8769H44.3338L41.4671 13.0177L40.3431 14.2887V17.8769H36.673V0.434631H36.6717ZM47.7255 0.434631H60.1334V4.07265H55.9137V17.8783H51.9687V4.07265H47.7255V0.434631ZM58.299 11.6486C58.299 7.93526 60.891 5.12034 64.3074 5.12034C67.725 5.12034 70.3157 7.93661 70.3157 11.6486V12.7447H61.9221C62.2427 13.9659 63.1376 14.7379 64.3074 14.7379C65.0414 14.7379 65.6603 14.4393 66.096 13.9161H69.9716C69.146 16.458 66.9897 18.1768 64.3074 18.1768C60.891 18.1768 58.299 15.3619 58.299 11.6486ZM66.6246 10.3521C66.2582 9.25598 65.409 8.55796 64.3086 8.55796C63.2082 8.55796 62.359 9.25598 61.9926 10.3521H66.6246ZM71.1191 11.6486C71.1191 7.93526 73.7111 5.12034 77.1275 5.12034C80.2233 5.12034 82.6544 7.43764 83.0678 10.652H79.5363C79.2157 9.45637 78.3207 8.68304 77.1287 8.68304C75.6384 8.68304 74.606 9.90423 74.606 11.6486C74.606 13.393 75.6384 14.6142 77.1287 14.6142C78.3207 14.6142 79.2157 13.8422 79.5363 12.6452H83.0678C82.6544 15.8595 80.2233 18.1768 77.1275 18.1768C73.7111 18.1768 71.1191 15.3619 71.1191 11.6486ZM89.6963 8.53376C88.5959 8.53376 87.7703 9.43082 87.7703 10.726V17.8783H84.1001V0.434631H87.7703V6.38995C88.5501 5.59241 89.5589 5.119 90.7287 5.119C93.0904 5.119 95.04 6.76384 95.04 10.0777V17.8769H91.3934V10.7246C91.3934 9.43082 90.7967 8.53376 89.6963 8.53376Z" fill="#FFFEFB"/>
                        <path d="M27.1084 12.7448C28.1172 14.165 28.7139 14.6142 29.7004 14.6142C30.916 14.6142 31.8332 13.8422 32.1315 12.6452H35.663C35.2496 15.8596 32.842 18.1769 29.8601 18.1769C27.6357 18.1769 26.3051 17.1548 25.2269 15.8098L27.1084 12.7448Z" fill="#00B35B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_6116_615">
                            <rect width="95.04" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

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