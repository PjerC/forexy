import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
import { useState } from 'react';


const Material = (props) => {
    //states
    const [icon,setIcon] = useState('bi bi-folder')
    // pl
    const objMaterials = [
        {no:'1.', title: 'Podstawy'},
        {no:'2.', title: 'Aplikacje', icon:{icon}},
        {no:'3.', title: 'Strategie', icon:{icon}},
        {no:'4.', title: 'Makro', icon:{icon}},
        {no:'5.', title: 'Ryzyko', icon:{icon}},
        {no:'6.', title: 'Notatnik', icon:{icon}},
        {no:'7.', title: 'Słownik', icon:{icon}},
        {no:'8.', title: 'Mentoring', icon:{icon}},
        {no:'9.', title: 'Pozostałe', icon:{icon}}
    ]
    const changeIcon = () => {
        setIcon('bi bi-folder2-open')
    }
    // TO DO - zmienim onmouseleave / enter na jedna funkcje   typy false/true 
    //const changeFolderImg = () => {setFolderImg('text-secondary bi bi-folder2-open')}
    //const changeImgToInitial = () => {setFolderImg('text-secondary bi bi-folder')}
    return (
        <div className='container text-secondary align-items-center justify-content-center m-1'>
            <div className='row justify-content-md-center align-items-center m-1'>
                {
                    objMaterials.map((item) => 
                        <div className='col w-25 border border-secondary m-2 animScale rounded'>
                            <i className={icon}></i>
                            <p className='fs-6'>{item.no}{item.title}</p>
                        </div>                                
                )}
            </div>                        
        </div>
            
    )
}
export default Material  