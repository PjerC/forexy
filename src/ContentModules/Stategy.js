//import { useState } from 'react';
import './Strategy.css';
const Strategy = (props) => {

   const objStrategies = [
        {strategyName:'fibo',previewImgUrl: 'img1'},
        {strategyName:'trendline',previewImgUrl: 'img2'},
        {strategyName:'divergence',previewImgUrl: 'img3'},
        {strategyName:'support resistance',previewImgUrl: 'img4'},
        {strategyName:'price action',previewImgUrl: 'img5'},
        {strategyName:'ema sma',previewImgUrl: 'img6'},
        {strategyName:'patterns',previewImgUrl: 'img7'}
    
    ];
   //TO DO - zakodzic metode do animowania kazdego elementu objektu - OSOBNO  , delay iteration ?

    return (

        <div className="d-flex h-100 justify-content-center align-items-center flex-grow-1 m-2 "> {
            objStrategies.map((item) => 
                <div style={{animation: 'fadeIn 1s'}} className="d-flex justify-content-center w-50 h-50 g-row-6 g-col-md-4 p-2 border border-secondary rounded m-2 " key={item.strategyName}><p style={{animation: 'fadeIn 1s'}}>{item.strategyName}</p>
                 </div>)}
        </div>
    )
}
export default Strategy 