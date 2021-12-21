import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import imgFib from '../Img/strategy/fibo.png'
import imgTrendline from '../Img/strategy/trendline.png'
import imgDiv from '../Img/strategy/divergence.png'
import imgSr from '../Img/strategy/sr.png'
import imgPriceaction from '../Img/strategy/priceaction.png'
import imgEmaSma from '../Img/strategy/emaSma.png'
import imgPatterns from '../Img/strategy/patterns.png'

const Strategy = (props) => {
    // nested components visiblity setters
    const {setVisibilityStrategyFibo,setVisibilityStrategyTrendline} = props;
    // state data to preview strategy text
    const {setPreviewText} = props;
    // visibility management
    const {setVisibilityStrategyItems} = props;
    // object - future from database inputs
    const objStrategies = [
        {strategyName:'I.', description: 'Zniesienie Fibonacci ',previewImgUrl: imgFib, preview:'Wyznaczanie poziomów zniesienia 0.618 & 0.5. Określanie początku i końca ruchu oraz golden zone.' },
        {strategyName:'II.', description: 'Linie Trendu',previewImgUrl: imgTrendline, preview:'Rysowanie linii trendu w miejscu reakcji ceny. Określanie przebicia linii i testu poziomu jako potwierdzenie.'},
        {strategyName:'III.', description: 'Dywergencje rsi',previewImgUrl: imgDiv, preview:'Znajdywanie prawidłowych dywergencji na podstawie wskaźnika rsi, w strefach wykupienia lub wyprzedania.'},
        {strategyName:'IV.', description: 'Wsparcia i Opory',previewImgUrl: imgSr,preview:'Wyznaczanie możliwych historycznych i przyszłych wsparć i oporów dla ceny. Teoria poziomów psychologicznych.'},
        {strategyName:'V.', description: 'Struktury Price Action',previewImgUrl: imgPriceaction ,preview:'Określanie struktury spadkowanej, wzrostowej lub konsolidacji. Wyznaczanie dołków i szczytów. BoS.'},
        {strategyName:'VI.', description: 'Linie Ema i Sma',previewImgUrl: imgEmaSma,preview:'Użycie linii ema, sma do określania aktualnego trendu, jego zmiany, oporu lub dodatkowych potwierdzeń.'},
        {strategyName:'VII.', description: 'Schematy',previewImgUrl: imgPatterns,preview:'Odnajdywanie powtarzających się historycznie schematów takich jak h&s, wedges, triple tops, triple bottoms,  waves.'},
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
                                       // setVisibilityStrategyPreview(false);
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
                                <img src={item.previewImgUrl} className='img-fluid m-3 p-3 rounded border border-secondary' alt='none' />
                </div>)
            }  
            </div>
    )
}
export default Strategy 