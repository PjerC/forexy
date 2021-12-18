import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Strategy = (props) => {
    // nested components visiblity setters
    const {setVisibilityStrategyFibo,setVisibilityStrategyTrendline} = props;
    // state data to preview strategy text
    const {setPreviewText} = props;
    // visibility management
    const {setVisibilityStrategyItems,setVisibilityStrategyPreview} = props;
    // object - future from database inputs
    const objStrategies = [
        {strategyName:'1', description: 'Fibonacci ',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk', preview:'Wyznaczanie poziomów 0.618 i 0.5 - strefy golden zone. Określanie początku i końca ruchu.' },
        {strategyName:'2', description: 'Linie Trendu',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA', preview:'Rysowanie linii trendu w miejscu reakcji ceny. Określanie przebicia linii i testu poziomu.'},
        {strategyName:'3', description: 'Dywergencje',previewImgUrl: 'https://drive.google.com/uc?id=1bj2OtZ0ORoBvoXBFVCv8fXwIcaMstEUU', preview:'Znajdywanie prawidłowych dywergencji na podstawie wskaźnika rsi, w strefach wykupienia lub wyprzedania.'},
        {strategyName:'4', description: 'Wsparcia Opory',previewImgUrl: 'https://drive.google.com/uc?id=1lY-GpUSk7EJhD5TPHb31pM8AKr19ltAy',preview:'Wyznaczanie możliwych wsparć i oporów dla ceny. Teoria poziomów psychologicznych.'},
        {strategyName:'5', description: 'Price Action',previewImgUrl: 'https://drive.google.com/uc?id=14FC-sakmyIgJy0JXBjwzB9_IkkqcO5GO',preview:'Określanie struktury instrumentu. Wyznaczanie dołków i szczytów. BoS.'},
        {strategyName:'6', description: 'Linie Ema',previewImgUrl: 'https://drive.google.com/uc?id=11n_JROa1Ajahxp8GmJpxQQ9gfKYbsvO1',preview:'Użycie linii ema do określania aktualnego trendu.'},
        {strategyName:'7', description: 'Schematy',previewImgUrl: 'https://drive.google.com/uc?id=1oRaVsDJdXH-z7Vccsg0tB6JdF5X4eRE9',preview:'Odnajdywanie powtarzających się schematów.'},
        {strategyName:'8', description: 'Mix',previewImgUrl: '',preview:'Wykorzystanie wiedzy ze wszystkich strategii do znajdywania potwierdzeń.'}
    ];

    return ( 
        <div className='d-flex flex-wrap text-secondary font-monospace justify-content-center align-items-center m-1'> 
            
            {
                objStrategies.map((item) => 
                <div className='d-flex flex-wrap animScale card border border-secondary bg-transparent rounded m-1 justify-content-center align-items-center' style={{width:'11rem' }}
                     onMouseEnter={()=>{setPreviewText(item.preview)}} key={item.strategyName}>
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{item.strategyName}</h5>
                        <p className="fs-6">{item.description}</p>
                        <button type="button" className="btn shadow-none animScale_2 pulser" 
                                onClick={
                                    () => {
                                        // hide strategy preview and strategy items components , show chosen component from map fcn
                                        setVisibilityStrategyItems(false);
                                        setVisibilityStrategyPreview(false);
                                        switch(item.strategyName) {
                                            case '1':
                                                setVisibilityStrategyFibo(true);
                                                break;
                                            case '2':
                                                setVisibilityStrategyTrendline(true);
                                                break;
                                            default:
                                        }
                                        
                                    }
                                }><i className='fs-2 bi bi-play'></i></button>
                    </div>
                </div>)
            }
            
            </div>
    )
}
export default Strategy 