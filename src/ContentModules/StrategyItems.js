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
        {strategyName:'I.', description: 'Zniesienie Fibonacci ',previewImgUrl: 'https://drive.google.com/uc?id=10j7L5EJ_4Z7_IZXY3XqtRxn0Gxz6GUCk', preview:'Wyznaczanie poziomów zniesienia 0.618 & 0.5. Określanie początku i końca ruchu oraz golden zone.' },
        {strategyName:'II.', description: 'Linie Trendu',previewImgUrl: 'https://drive.google.com/uc?id=1cLPpUEJtRg5y_AhB0iYOFRUH4vv032bA', preview:'Rysowanie linii trendu w miejscu reakcji ceny. Określanie przebicia linii i testu poziomu jako potwierdzenie.'},
        {strategyName:'III.', description: 'Dywergencje rsi',previewImgUrl: 'https://drive.google.com/uc?id=1bj2OtZ0ORoBvoXBFVCv8fXwIcaMstEUU', preview:'Znajdywanie prawidłowych dywergencji na podstawie wskaźnika rsi, w strefach wykupienia lub wyprzedania.'},
        {strategyName:'IV.', description: 'Wsparcia i Opory',previewImgUrl: 'https://drive.google.com/uc?id=1lY-GpUSk7EJhD5TPHb31pM8AKr19ltAy',preview:'Wyznaczanie możliwych historycznych i przyszłych wsparć i oporów dla ceny. Teoria poziomów psychologicznych.'},
        {strategyName:'V.', description: 'Struktury Price Action',previewImgUrl: 'https://drive.google.com/uc?id=14FC-sakmyIgJy0JXBjwzB9_IkkqcO5GO',preview:'Określanie struktury spadkowanej, wzrostowej lub konsolidacji. Wyznaczanie dołków i szczytów. BoS.'},
        {strategyName:'VI.', description: 'Linie Ema i Sma',previewImgUrl: 'https://drive.google.com/uc?id=11n_JROa1Ajahxp8GmJpxQQ9gfKYbsvO1',preview:'Użycie linii ema, sma do określania aktualnego trendu, jego zmiany, oporu lub dodatkowych potwierdzeń.'},
        {strategyName:'VII.', description: 'Schematy',previewImgUrl: 'https://drive.google.com/uc?id=1oRaVsDJdXH-z7Vccsg0tB6JdF5X4eRE9',preview:'Odnajdywanie powtarzających się historycznie schematów takich jak h&s, wedges, triple tops, triple bottoms,  waves.'},
        {strategyName:'VIII.', description: 'Mix',previewImgUrl: '',preview:'Wykorzystanie wiedzy ze wszystkich strategii do znajdywania potwierdzeń do otwarcia pozycji.'}
    ];

    return ( 
        <div className='d-flex flex-grow-1 flex-column  text-secondary font-monospace justify-content-center align-items-center m-1 p-1'> 
            {
                objStrategies.map((item) => 
                <div className='d-flex flex-column  vh-75 flex-grow-1 animScale rounded m-1 justify-content-start align-items-center' 
                     onMouseEnter={()=>{setPreviewText(item.preview)}} key={item.strategyName}>
                         <div id='cardHeader' className='d-flex flex-row'>
                            <h5 className="m-1 p-1 fw-bold ">{item.strategyName}</h5>
                            <u><p className="m-1 p-1 fw-bold">{item.description}</p></u>
                        </div>
                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <p  className='d-flex flex-grow-1 m-1 p-1 text-start' >{item.preview}</p>
                            <button type="button" className="text-secondary align-content-around btn shadow-none animScale_2 pulser " 
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
                                <img src={item.previewImgUrl} className='img-fluid m-3 p-3 rounded border border-secondary'/>
                </div>)
            }  
            </div>
    )
}
export default Strategy 