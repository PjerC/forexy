//import { useState } from 'react';
import './Strategy.css';
const Strategy = (props) => {

   const objStrategies = [
        {strategyName:'fibonacci',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk' },
        {strategyName:'trendline',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA'},
        {strategyName:'divergence',previewImgUrl: 'img3'},
        {strategyName:'support resistance',previewImgUrl: 'img4'},
        {strategyName:'price action',previewImgUrl: 'img5'},
        {strategyName:'ema sma',previewImgUrl: 'img6'},
        {strategyName:'patterns',previewImgUrl: 'img7'}
    
    ];
   //TO DO - zakodzic metode do animowania kazdego elementu objektu - OSOBNO  , delay iteration ?
   //TO DO - kolor kontentu zmiana na czarny z useState App.js
   //TO DO - spinner - img loading 

    return (

        <div style={{animation: 'fadeIn 1s'}}  className="d-flex  text-primary h-100 justify-content-center align-items-center flex-grow-1 m-2 "> {
            objStrategies.map((item) => 
                <div 
                    className="d-flex flex-column justify-content-center align-items-center w-50 h-50 g-row-6 g-col-md-4 p-2 border border-secondary rounded m-2 " 
                    key={item.strategyName}>
                        <p style={{animation: 'fadeIn 1s'}} className='fw-bold font-monospace'>{item.strategyName}</p>
                        <img className='img-fluid m-1 p-1 fadeIn 2s border border-secondary rounded' src={item.previewImgUrl} alt='none'/>
                 </div>)}
        </div>
    )
}
export default Strategy 