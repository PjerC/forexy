//import { useState } from 'react';
import './Strategy.css';
const Strategy = (props) => {

   const objStrategies = [
        {strategyName:'fibonacci',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk' },
        {strategyName:'trendline',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA'},
        {strategyName:'divergence',previewImgUrl: 'https://drive.google.com/uc?id=1bj2OtZ0ORoBvoXBFVCv8fXwIcaMstEUU'},
        {strategyName:'support resistance',previewImgUrl: 'https://drive.google.com/uc?id=1lY-GpUSk7EJhD5TPHb31pM8AKr19ltAy'},
        {strategyName:'price action',previewImgUrl: 'https://drive.google.com/uc?id=14FC-sakmyIgJy0JXBjwzB9_IkkqcO5GO'},
        {strategyName:'ema sma',previewImgUrl: 'https://drive.google.com/uc?id=11n_JROa1Ajahxp8GmJpxQQ9gfKYbsvO1'},
        {strategyName:'patterns',previewImgUrl: 'https://drive.google.com/uc?id=1oRaVsDJdXH-z7Vccsg0tB6JdF5X4eRE9'}
    ];
   //TO DO - zakodzic metode do animowania kazdego elementu objektu - OSOBNO  , delay iteration ?
   //TO DO - kolor kontentu zmiana na czarny z useState App.js
   //TO DO - spinner - img loading 

    return (

        <div style={{animation: 'fadeIn 1s'}}  className="d-flex container-fluid text-primary h-100 justify-content-center align-items-center flex-grow-1 m-2 "> {
            objStrategies.map((item) => 
                <div 
                    className="d-flex flex-column justify-content-center align-items-center w-50 h-50 g-row-6 g-col-md-4 p-2 border border-secondary rounded m-2 " 
                    key={item.strategyName}>
                        <p style={{animation: 'fadeIn 1s'}} className='fw-bold font-monospace h-25'>{item.strategyName}</p>
                        <img className='img-fluid m-0 p-1 fadeIn 2s border border-secondary rounded h-75' src={item.previewImgUrl} alt='none'/>
                 </div>)}
        </div>
    )
}
export default Strategy 