//import { useState } from 'react';
import './ContentModules.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
const Strategy = (props) => {
    // state data to preview strategy text
    const {setPreviewText} = props;
    const objStrategies = [
        {strategyName:'fibonacci', description: 'wyznaczanie golden zone',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk', preview:'Wyznaczanie poziomów 0.618 i 0.5 - strefy golden zone. Określanie początku i końca ruchu.' },
        {strategyName:'linie trendu', description: 'wyznaczanie trendów',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA', preview:'Rysowanie linii trendu w miejscu reakcji ceny. Określanie przebicia linii i testu poziomu.'},
        {strategyName:'dywergencje', description: 'wyznaczanie dywergencji rsi',previewImgUrl: 'https://drive.google.com/uc?id=1bj2OtZ0ORoBvoXBFVCv8fXwIcaMstEUU', preview:'Znajdywanie prawidłowych dywergencji na podstawie wskaźnika rsi, w strefach wykupienia lub wyprzedania.'},
        {strategyName:'poziomy', description: 'wyznaczanie wsparć i oporów',previewImgUrl: 'https://drive.google.com/uc?id=1lY-GpUSk7EJhD5TPHb31pM8AKr19ltAy',preview:'Wyznaczanie możliwych wsparć i oporów dla ceny. Teoria poziomów psychologicznych.'},
        {strategyName:'struktury', description: 'wyznaczanie stuktur',previewImgUrl: 'https://drive.google.com/uc?id=14FC-sakmyIgJy0JXBjwzB9_IkkqcO5GO',preview:'Określanie struktury instrumentu. Wyznaczanie dołków i szczytów. BoS.'},
        {strategyName:'linie ema', description: 'wyznaczanie golden cross',previewImgUrl: 'https://drive.google.com/uc?id=11n_JROa1Ajahxp8GmJpxQQ9gfKYbsvO1',preview:'Użycie linii ema do określania aktualnego trendu.'},
        {strategyName:'schematy', description: 'odnajdywanie schematów',previewImgUrl: 'https://drive.google.com/uc?id=1oRaVsDJdXH-z7Vccsg0tB6JdF5X4eRE9',preview:'Odnajdywanie powtarzających się schematów.'},
        {strategyName:'wszystkie', description: 'uwzględnienie wszystkiego',previewImgUrl: '',preview:'Wykorzystanie wiedzy ze wszystkich strategii do znajdywania potwierdzeń.'}
    ];

   //TO DO - spinner - img loading 
    return ( 
        <div   className='d-flex flex-wrap text-secondary font-monospace justify-content-center align-items-center m-1'> 
        {
            objStrategies.map((item) => 
            <div className='d-flex flex-wrap animScale card border border-secondary bg-transparent rounded m-1 justify-content-center align-items-center' style={{width:'11rem'}}
                 onMouseEnter={()=>{setPreviewText(item.preview)}} key={item.strategyName}>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.strategyName}</h5>
                    <p className="fs-6">{item.description}</p>
                    <button type="button" className="btn shadow-none text-secondary"><i className='fs-2 bi bi-play'></i></button>
                </div>
            </div>
              /*  <div onMouseEnter={()=>{setPreviewText(item.preview)}} 
                    className='d-flex flex-wrap animScale justify-content-center align-items-center border border-secondary rounded m-2 p-2'
                    key={item.strategyName}>
                        <button className='btn animScale_2 shadow-none' >
                            <p className='text-secondary fw-bold justify-content-center font-monospace '>{item.strategyName}</p>
                            <i className='fs-2 bi bi-play'></i>
                         </button>

                 </div>*/)
        }
        
        </div>
    )
}
export default Strategy 