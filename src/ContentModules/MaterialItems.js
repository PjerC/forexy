import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';

const MaterialItems = (props) => {
    const objMaterials = [
        {no:1, title: 'Podstawy', icon:'bi bi-question-square',
            content:
                {
                    el1:'Forex, waluty, pary walutowe, wykres',
                    el2:'Broker, schemat ideologiczny, schemat przepływu danych, przykładowe aplikacje',
                    el3:'Podział sesji, sesje z największym obrotem, sesje z umiarkowanym obrotem, sesje przed i po zamknięciu rynku',
                    el4:'Poradnik podstaw pdf'
                }
        },
        {no:2, title: 'Aplikacje', icon:'bi bi-tools',
            content:
                {
                    el1:'Poradnik tworzenia konta demo',
                    el2:'Poradnik obsługi cTrader',
                    el3:'Poradnik obsługi MetaTrader 4',
                    el4:'TradingView - vid',
                    el5:'Poradnik obsługi TradingView',
                    el6:'Podpinanie MyFxBook pod konto'
                }
        },
        {no:3, title: 'Strategie', icon:'bi bi-layout-wtf',
            content:
                {
                    el1:'Linie ema sma',
                    el2:'Linie trendu',
                    el3:'Dywergencje',
                    el4:'Price action',
                    el5:'Schematy',
                    el6:'Wsparcia i opory',
                    el7:'Zniesienie Fibonacci',
                    el8:'Wydarzenia'
                }
        },
        {no:4, title: 'Wydarzenia', icon:'bi bi-tornado',
            content:
                {
                    el1:'4',
                    el2:'5',
                    el3:'6',
                }
        },
        {no:5, title: 'Zarządzanie', icon:'bi bi-piggy-bank',
            content:
                {
                    el1:'7',
                    el2:'8',
                    el3:'9',
                }
        },
        {no:6, title: 'Mentoring',icon:'bi bi-journal-bookmark',
            content:
                {
                    el1:'10',
                    el2:'11',
                    el3:'12',
                }
        },
        {no:7, title: 'Dodatkowe',icon:'bi bi-search',
            content:
                {
                    el1:'13',
                    el2:'14',
                    el3:'15',
                }
        },
    ]

    return (
        <div className='justify-content-md-center align-items-center m-2  w-75'>
        {
            objMaterials.map((item) => 
                <a href={'#'+item.title}
                    className='d-flex flex-wrap flex-column border border-secondary text-secondary m-2 p-2 animScale rounded justify-content-left text-decoration-none' 
                    type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapser"
                    key={item.no}>
                    <div className='d-flex flex-row justify-content-left align-items-center'>
                        <i className={item.icon}></i>
                        <p className='m-2 fs-2'>{item.title}</p>
                        <i className='ms-auto m-1 p-2 bi bi-caret-down-fill'></i>
                    </div>
                   
                    <div id={item.title} className='collapse'>
                        <div className='d-flex flex-column justify-content-left align-items-start m-2 p-2'>
                            
                            {Object.values(item.content).map((el)=>
                                <div className='d-flex flex-row justify-content-left' key={el}>
                                 <i className='m-1 bi bi-folder'></i>
                                 <p className='m-1 text-start'>{el}</p>
                                </div>
                            )}
                            
                        </div>
                    </div> 
                </a>                                
        )}

        
    </div> 
    )
}
export default MaterialItems;