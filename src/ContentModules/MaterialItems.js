import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';

const MaterialItems = (props) => {
    const {setMaterialPreview} = props;
    const objMaterials = [
        {no:0, title: 'Podstawy', icon:'bi bi-question-square'},
        {no:1, title: 'Aplikacje', icon:'bi bi-tools'},
        {no:2, title: 'Strategie', icon:'bi bi-layout-wtf'},
        {no:3, title: 'Wydarzenia', icon:'bi bi-tornado'},
        {no:4, title: 'Ryzyko', icon:'bi bi-piggy-bank'},
        {no:5, title: 'Notatnik',icon:'bi bi-journal-bookmark'},
        {no:6, title: 'Słownik',icon:'bi bi-search'},
        {no:7, title: 'Mentoring',icon:'bi bi-person'},
        {no:8, title: 'Pozostałe',icon:'bi bi-three-dots'}
    ]

    return (
        <div className='justify-content-md-center align-items-center m-2 border border-primary'>
        {
            objMaterials.map((item) => 
                <div className='d-flex flex-row border border-secondary m-2 animScale rounded m-1 justify-content-center align-items-center flex-start' key={item.no} onMouseEnter={()=> {
                    setMaterialPreview(item.title)}
                }
                >
                    <i className={item.icon}></i>
                    <p className='m-2 fs-2'>{item.title}</p>
                </div>                                
        )}
    </div> 
    )
}
export default MaterialItems;