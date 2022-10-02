import React from 'react';

import TopSection from '../global/topSection';

import introImg from '../../assets/img/Bildschirmfoto 2021-06-29 um 15.32 1.png'
import SmSummarySox from '../global/SmallSummaryBox/Sm_Summary_b0x';

import summaryImg1 from '../../assets/img/Bildschirmfoto 2021-06-29 um 15.32 4.png'
import summaryImg2 from '../../assets/img/Bildschirmfoto 2021-06-29 um 15.32.png'
import summaryImg3 from '../../assets/img/Bildschirmfoto 2021-06-29 um 15.32 10 (1).png'
import summaryImg4 from '../../assets/img/Bildschirmfoto 2021-06-29 um 15.32 11 (1).png'

const WhyRocktech = (props) => {
    return(
        <>
            <TopSection menuColor={"black"} type={2} image={introImg} body={{title: "Why RockTech", content : "We put green power into your batteries"}} />
            <SmSummarySox type={2} background={'white'} body={{title: ('Speed & Reliability').toUpperCase(), info: "Our team of seasoned experts are building on tried and tested methods to ensure fast time-to-market. Located right at the heart of the European automotive industry we ensure just-in-time delivery and solutions that are customized to what our partners need."}} 
                imageOrder="oneAbove"
                images={ 
                    [
                        {url: summaryImg1, place: 1}, 
                        {url: summaryImg2, place: 2}
                    ] } />
            <SmSummarySox type={2} background={'white'} body={{title: ('Innovation').toUpperCase(), info: "The reliable causticization process is what we continuously optimize towards a lower carbon footprint. In parallel we’re driving innovation with an entirely new nitrate-gypsum route and a strong recycling approach that will transform us into a zero-waste company."}} 
                images={ 
                    [
                        {url: summaryImg3, place: 2}, 
                        {url: summaryImg4, place: 1}
                    ] } />
        </>
    )
}

export default WhyRocktech