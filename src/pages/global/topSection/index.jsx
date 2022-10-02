import React, { useEffect } from "react";
import MenuNav from "../menu/menuNav";

const TopSection = (props) => {
    let Class = (props.type !== 1 && props.type) ? `top-section${props.type}` : ""
    let menuColor = props.menuColor ? props.menuColor: "white"

    const changeHeight = () => {
        let contentDiv = document.querySelector('.top-section2 .page-intro')
        document.querySelector('.top-section2 img').style.height = `calc(100vh - ${contentDiv.offsetHeight}px - var(--side-space) + 20px)`
        console.log(contentDiv.offsetHeight)
    }
    if(props.type === 2){
        useEffect (() => {
            setTimeout(changeHeight, 1500)
        }, [])
    }
    return (
        <>
            <MenuNav color={menuColor} />
            <section className={`top-section ${Class}`}>
                <img alt="home" src={props.image}/>
                <div className="page-intro">
                    <h2>{props.body.title}</h2>
                    <p>{props.body.content}</p>
                </div>
            </section>
        </>
    )
}

export default TopSection