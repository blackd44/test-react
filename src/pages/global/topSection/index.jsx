import React from "react";

const TopSection = (props) => {
    let Class = (props.type !== 1 && props.type) ? `top-section${props.type}` : "top-section"
    return (
        <section className={Class}>
            <img alt="home" src={props.image} />
            <div className="page-intro">
                <h2>{props.body.title}</h2>
                <p>{props.body.content}</p>
            </div>
        </section>
    )
}

export default TopSection