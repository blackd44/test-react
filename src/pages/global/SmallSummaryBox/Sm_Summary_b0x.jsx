import React from "react";
import './style.css'

const Sm_summary_box = (props) => {
    const images = props.images
    images.sort((a, b) => b.place-a.place)

    if(images.length===2){
        images[0].class = "right"
        images[1].class = "left"
    }

    return(
        <div className="Box">
            <div className="info">
                <div className="title"><b>{props.body.title}</b></div>
                <div className="content">{props.body.info}</div>
            </div>
            <div className="images">
                <div className="white"></div>
                {images.map((image)=> (
                    <img key={image.url} src={image.url} alt="rocktech" className={`${image.class}`}/>
                ))}
            </div>
        </div>
    )
}

export default Sm_summary_box