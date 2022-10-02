import React from "react";
import './style.css'

const SmSummarySox = (props) => {
    const images = props.images
    images.sort((a, b) => b.place-a.place)
    let out

    if(images.length===2){
        images[0].class = "right"
        images[1].class = "left"
    }

    let imageClass =  (props.imageOrder === 'oneAbove')? 'images oneAbove' : 'images'

    let sectionStyle = props.background === 'white' ? {
            backgroundColor: 'var(--white-color)'
        }: {
            backgroundColor: 'var(--green-color)'
        };

    let color = props.background === 'white' ? {
            color: 'var(--black-color)'
        }: {
            color: 'var(--white-color)'
        };

    if(props.type === 2){
        let ImageWhiteSpace = {
            top: '0'
        }
        Object.assign(sectionStyle, {
            paddingBottom : 'var(--side-space)',
            paddingTop : '0',
        })
        out = (
            <section className='small-summary-box' style={sectionStyle}>
                <div className="Box">
                    <div className={imageClass}>
                        <div className="white" style={ImageWhiteSpace} ></div>
                        {images.map((image)=> (
                            <img key={image.url} src={image.url} alt="rocktech" className={`${image.class}`}/>
                        ))}
                    </div>
                    <div className="info" style={color}>
                        <div className="title"><b>{props.body.title}</b></div>
                        <div className="content">{props.body.info}</div>
                    </div>
                </div>
            </section>
        )
    }
    else(
        out = (
            <section className='small-summary-box' style={sectionStyle}>
                <div className="Box">
                    <div className="info">
                        <div className="title"><b>{props.body.title}</b></div>
                        <div className="content">{props.body.info}</div>
                    </div>
                    <div className={imageClass}>
                        <div className="white"></div>
                        {images.map((image)=> (
                            <img key={image.url} src={image.url} alt="rocktech" className={`${image.class}`}/>
                        ))}
                    </div>
                </div>
            </section>
        )
    )
    return out
}

export default SmSummarySox