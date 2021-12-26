import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';

const MaterialItems = (props) => {
    const objMaterials = [
        {no:1, title: 'Podstawy', icon:'bi bi-question-square', items:{
            item1:'item2',
            item2:'item1'}
        
        },
        {no:2, title: 'Aplikacje', icon:'bi bi-tools'},
        {no:3, title: 'Strategie', icon:'bi bi-layout-wtf'},
        {no:4, title: 'Wydarzenia', icon:'bi bi-tornado'},
        {no:5, title: 'Zarządzanie', icon:'bi bi-piggy-bank'},
        {no:6, title: 'Mentoring',icon:'bi bi-journal-bookmark'},
        {no:7, title: 'Dodatkowe',icon:'bi bi-search'}
    ]

    return (
        <div className='justify-content-md-center align-items-center m-2  w-75'>
        {
            objMaterials.map((item) => 
                <a href={'#'+item.title}
                    className='d-flex flex-column border border-secondary text-secondary m-2 p-2 animScale rounded justify-content-left text-decoration-none' 
                    type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapser"
                    key={item.no}>
                    <div className='d-flex flex-row justify-content-left align-items-center'>
                        <i className={item.icon}></i>
                        <p className='m-2 fs-2'>{item.title}</p>
                    </div>
                   
                    
                    <div id={item.title} className='collapse justify-content-left'>
                            <p className='d-flex justify-content-left align-items-center'>kontent materiałów - lista</p>
                    </div> 
                </a>                                
        )}

        
    </div> 
    )
}
export default MaterialItems;