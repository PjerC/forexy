//import { useState } from 'react';
import './Strategy.css';
const Strategy = (props) => {

    const objStrategies = ['fibonacci','trendlines','divergence','support & resistance','price action','ema200'];

    return (

        <div className="d-flex grid h-100 justify-content-center align-items-center flex-grow-1 m-2 border border-secondary"> {
            objStrategies.map((item,index) => 
                <div className="flex-grow-1 g-row-6 g-col-md-4 border border-secondary rounded m-2 animFadeIn" key={item}>{index} {item}</div>)}
        </div>
    )
}
export default Strategy 