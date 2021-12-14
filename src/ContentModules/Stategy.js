//import { useState } from 'react';
import './ContentModules.css';
const Strategy = (props) => {
    // state data to preview strategy text
    const {setPreviewText} = props;
    const objStrategies = [
        {strategyName:'fibonacci',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk', preview:'fibonacci retramecent based on golden zone between 0.5 and 0.618 levels' },
        {strategyName:'linie trendu',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA', preview:'trendline drawing on places where price was reacting. Break and retest template for confirmation'},
        {strategyName:'dywergencje',previewImgUrl: 'https://drive.google.com/uc?id=1bj2OtZ0ORoBvoXBFVCv8fXwIcaMstEUU', preview:'rsi indicator based divergence strategy. Confirmation under level 30 or above level 70'},
        {strategyName:'poziomy',previewImgUrl: 'https://drive.google.com/uc?id=1lY-GpUSk7EJhD5TPHb31pM8AKr19ltAy',preview:'Finding levels where price was reacting historically. Included pryschological levels and quarters theory'},
        {strategyName:'struktury',previewImgUrl: 'https://drive.google.com/uc?id=14FC-sakmyIgJy0JXBjwzB9_IkkqcO5GO',preview:'Finding market structure, higher high, higher lows, lower highs, lower lows. Also BoS method'},
        {strategyName:'linie ema',previewImgUrl: 'https://drive.google.com/uc?id=11n_JROa1Ajahxp8GmJpxQQ9gfKYbsvO1',preview:'finding actual trend structure based on moving averages'},
        {strategyName:'schematy',previewImgUrl: 'https://drive.google.com/uc?id=1oRaVsDJdXH-z7Vccsg0tB6JdF5X4eRE9',preview:'patterns base strategy for confirmations'},
        {strategyName:'wszystkie',previewImgUrl: '',preview:'mixed strategy'}
    ];
   //TO DO - zakodzic metode do animowania kazdego elementu objektu - OSOBNO  , delay iteration ?
   //TO DO - spinner - img loading 
   // to do - usunac inline style i dodac do głownego css kompnentu - best practice 
    // <img src={item.previewImgUrl} className='img-fluid'></img>
    return (
        
        <div style={{animation:'fadeIn 1s'}}  className='d-flex flex-wrap text-secondary justify-content-center align-items-center m-1'> 
        {
            objStrategies.map((item) => 
                <div style={{animation:'animScale 500ms'}} onMouseEnter={()=>{setPreviewText(item.preview)}} 
                    className='justify-content-center align-items-center border border-secondary rounded m-2 p-2 animScale'
                    key={item.strategyName}>
                        <p style={{animation: 'fadeIn 1s'}} className='fw-bold justify-content-center font-monospace'>{item.strategyName}</p>
                        <i className="bi bi-play animScale_2 "></i>
                 </div>)
        }

        </div>
    )
}
export default Strategy 