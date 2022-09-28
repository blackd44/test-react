import React from 'react';

const SumBox = (props) => {
    return(
        <div className='summary'>
            <div className='sum-num'>{props.body.num}</div>
            <div className='sum-img'>
                <img alt='img' src={props.image}/>
            </div>
            <div className='sum-topic'>
                <p><b>{props.body.title}</b></p>
                <p>
                    {props.body.content}<br/>
                    {props.body.until}
                </p>
            </div>
        </div>
    )
}

export default SumBox