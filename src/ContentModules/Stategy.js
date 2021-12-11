//import { useState } from 'react';
import './ContentModules.css';
const Strategy = (props) => {
    // state data to preview strategy text
    const {setPreviewText} = props;
    const objStrategies = [
        {strategyName:'fibonacci',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk', preview:'fibonacci retramecent based on golden zone between 0.5 and 0.618 levels' },
        {strategyName:'trendline',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA', preview:'trendline drawing on places where price was reacting. Break and retest template for confirmation'},
        {strategyName:'divergence',previewImgUrl: 'https://drive.google.com/uc?id=1bj2OtZ0ORoBvoXBFVCv8fXwIcaMstEUU', preview:'rsi indicator based divergence strategy. Confirmation under level 30 or above level 70'},
        {strategyName:'support resistance',previewImgUrl: 'https://drive.google.com/uc?id=1lY-GpUSk7EJhD5TPHb31pM8AKr19ltAy',preview:'Finding levels where price was reacting historically. Included pryschological levels and quarters theory'},
        {strategyName:'price action',previewImgUrl: 'https://drive.google.com/uc?id=14FC-sakmyIgJy0JXBjwzB9_IkkqcO5GO',preview:'Finding market structure, higher high, higher lows, lower highs, lower lows. Also BoS method'},
        {strategyName:'ema sma',previewImgUrl: 'https://drive.google.com/uc?id=11n_JROa1Ajahxp8GmJpxQQ9gfKYbsvO1',preview:'finding actual trend structure based on moving averages'},
        {strategyName:'patterns',previewImgUrl: 'https://drive.google.com/uc?id=1oRaVsDJdXH-z7Vccsg0tB6JdF5X4eRE9',preview:'patterns base strategy for confirmations'}
    ];
   //TO DO - zakodzic metode do animowania kazdego elementu objektu - OSOBNO  , delay iteration ?
   //TO DO - spinner - img loading 
    
    return (
        
        <div style={{animation:'fadeIn 1s'}}  className="d-flex container-fluid text-secondary h-50 justify-content-center align-items-center flex-grow-1 m-2"> 
        {
            objStrategies.map((item) => 
                <div style={{animation:'animScale 500ms'}} className='d-flex' onMouseEnter={()=>{setPreviewText(item.preview)}} 
                    className="d-flex flex-column justify-content-center align-items-center w-50 h-75  p-2 border border-secondary rounded m-2 animScale" 
                    key={item.strategyName}>
                        <p style={{animation: 'fadeIn 1s'}} className='fs-4 fw-bold font-monospace h-25'>{item.strategyName}</p>
                        <img className='img-fluid m-0 p-1 fadeIn 2s border border-secondary rounded h-75' src={item.previewImgUrl} alt='none'/>
                 </div>)
        }
        </div>
    )
}
export default Strategy 