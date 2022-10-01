import React from "react";

import './style.css'

import image1 from '../../../assets/img/Bildschirmfoto 2021-06-29 um 15.32 3.png'
import image2 from '../../../assets/img/Bildschirmfoto 2021-06-29 um 15.32 3 (1).png'

const News = (props) => {
    return(
        <section className="news">
            <div className="head">
                <span>News</span>
                <span>
                    <span>
                        <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3333 2L2.99998 21.7368L22.3333 42" stroke="#1E1E1E" stroke-width="3"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 42L21.3333 22.2632L2 2" stroke="#1E1E1E" stroke-width="3"/>
                        </svg>
                    </span>
                </span>
            </div>
            <div className="news">
                <div>
                    <div className="image">
                        <img alt="Vancouver, BC, Canada – May 25, 2021" src={image1}/>
                    </div>
                    <div className="info">
                        <div className="title">Vancouver, BC, Canada – May 25, 2021</div>
                        <div>Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network</div>
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img alt="Vancouver, BC, Canada – May 25, 2021" src={image2}/>
                    </div>
                    <div className="info">
                        <div className="title">Vancouver, BC, Canada – May 25, 2021</div>
                        <div>Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network</div>
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img alt="Vancouver, BC, Canada – May 25, 2021" src={image1}/>
                    </div>
                    <div className="info">
                        <div className="title">Vancouver, BC, Canada – May 25, 2021</div>
                        <div>Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network</div>
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img alt="Vancouver, BC, Canada – May 25, 2021" src={image2}/>
                    </div>
                    <div className="info">
                        <div className="title">Vancouver, BC, Canada – May 25, 2021</div>
                        <div>Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News