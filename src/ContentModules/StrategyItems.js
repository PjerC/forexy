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

    // object - future from database inputs
    const objStrategies = [
        {selector:'I', description: '1.Linie Ema & Sma',previewImgUrl: imgEmaSma,
            preview:
            {
                txt1:'Określanie trendu przy użyciu ema200',
                txt2:'Wykorzystanie sma5 do utrzymywaia pozycji profitowych',
                txt3:'Otwieranie pozycji według przecięcia linii',
            }
        },
        {selector:'II', description: '2.Linie Trendu',previewImgUrl: imgTrendline,
            preview:
            {
                txt1:'Określanie miejsc reakcji ceny',
                txt2:'Wyznaczanie linii trendu',
                txt3:'Break & Retest',
                txt4:'Określanie zmiany trendu'
            }
        },
        {selector:'III', description: '3.Schematy',previewImgUrl: imgPatterns,
            preview:
            {
                txt1:'Trójkąt spadkowy',
                txt2:'Trójkąt wzrostowy',
                txt3:'Kanał boczny',
                txt4:'Head & shoulders',
                txt5:'Tops & Bottoms',
                txt6:'Schematy powtarzające się'

            }
        },
        {selector:'IV', description: '4.Price Action',previewImgUrl: imgPriceaction ,
            preview:
            {
                txt1:'Określanie struktury, wyznaczanie dołków i szczytów',
                txt2:'Struktura wzrostowa',
                txt3:'Struktura spadkowa',
                txt4:'Kanał',
                txt5:'Break of structure'
            }
        },
        {selector:'V', description: '5.Wsparcia & Opory',previewImgUrl: imgSr,
            preview:
            {  
                txt1:'Wyznaczanie wsparć',
                txt2:'Wyznaczanie oporów',
                txt3:'Cienie świeczek',
                txt4:'Poziomy psychologiczne'
            }
        },
        {selector:'VI', description: '6.Dywergencje',previewImgUrl: imgDiv,
            preview:
            {
                txt1:'Wskaźnik rsi',
                txt2:'Wyznaczanie dywergencji',
                txt3:'Dywergencja w kanale wykupienia',
                txt4:'Dywergencja w kanale wyprzedania',
                txt5:'Nieprawidłowe dywergencje'
            }
        },
        {selector:'VII', description: '7.Zniesienie Fibonacci',previewImgUrl: imgFib,
            preview:
            {
                txt1:'Poziomy zniesień',
                txt2:'Strefa zniesienia',
                txt3:'Wyznaczanie początku ruchu',
                txt4:'Wyznaczanie końca ruchu',
                txt5:'Take profit i stop loss według nastaw Fibonacci'
            }
        },
        {selector:'VIII', description: '8.Strategia',previewImgUrl: '',
            preview:
            {
                txt1:'Wykorzystywanie strategii do potwierdzeń',
                txt2:'Przykłady zagrań'
            }
        },
    ];

    return ( 
        <div className='justify-content-center font-monospace align-items-center m-2  w-75'> 
            {
                objStrategies.map((item) => 
                <a href={'#'+item.selector}
                    className='d-flex flex-wrap flex-column animScale border border-secondary text-secondary m-2 p-2 justify-content-left text-decoration-none' 
                    type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapser"
                    key={item.selector}>
                <div className='d-flex flex-row justify-content-left align-items-center'>
                    <h5 className='fs-2'>{item.description}</h5>
                    <i className='ms-auto m-1 p-2 bi bi-caret-down-fill'></i>
                </div>
                <div id={item.selector} className='collapse'>
                    <div className='d-flex flex-column justify-content-left align-items-start m-2 p-2'>
                        <ul className='d-flex flex-column '>
                        {Object.values(item.preview).map((txt)=> <li key={txt} className='animScale justify-content-left align-items-start p-1'><h5 className='text-start'>{txt}</h5></li>)}
                        </ul>
                        
                        
                       
                    </div>

                </div>
                </a>
                
                )
            }  
            </div>
    )
}
export default Strategy 