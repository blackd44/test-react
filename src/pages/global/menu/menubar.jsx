import React from "react";

const MenuBar = () => {

    const navSide = () => {
        const lines = document.querySelector('.menu-bar')
        const nav = document.querySelector('ul.links')

        nav.classList.toggle('ul-active');
    }

    return(
        <div className="menu-bar" onClick={() => navSide()}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    )
}

export default MenuBar