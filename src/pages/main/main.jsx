import React from 'react';
import introImg from "../../assets/img/jon-flobrant-t07FAEn9wAA-unsplash 1.png"
import SummaryBox from "../global/boxes/SumBox"

import summaryImg1 from '../../assets/img/productionCapacity02-01x 1.png'
import summaryImg2 from '../../assets/img/24000Tons12-01x 1.png'
import summaryImg3 from '../../assets/img/Recyling02-01 1.png'

const Home = (props) => {
    return(
        <>
            <section className="top-section">
                <img alt="home" src={introImg} />
                <div className="page-intro">
                    <h2>The superfuel for the battery age.</h2>
                    <p>We are the clean tech company powering the electric mobility revolution. Serving the automotive industry with high-quality lithium made in Germany. We work to zero out emissions - one lithium battery at a time.</p>
                </div>
            </section>
            <section className="summary-section">
                <div className="summary-container">
                    <SummaryBox body={{title: ('times').toUpperCase(), num: '5', content: 'production capacity', until: 'until 2030'}} image={summaryImg1}/>
                    <SummaryBox body={{title: ('tonnes').toUpperCase(), num: '24 000', content: 'of lithium per', until: 'year in 2025'}} image={summaryImg2}/>
                    <SummaryBox body={{title: ('percent').toUpperCase(), num: '50', content: 'of raw material will come', until: 'from recycling by 2030'}} image={summaryImg3}/>
                </div>
            </section>
        </>
    )
}

export default Home