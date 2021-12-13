import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
//import { useState } from 'react';


const Material = (props) => {
    // TO DO - zmienim onmouseleave / enter na jedna funkcje   typy false/true 

   // const [folderImg,setFolderImg] = useState('text-secondary bi bi-folder');
    //const changeFolderImg = () => {setFolderImg('text-secondary bi bi-folder2-open')}
    //const changeImgToInitial = () => {setFolderImg('text-secondary bi bi-folder')}
    return (
        <div className='container text-secondary w-25 align-items-center justify-content-center m-1'>
            <div className='row justify-content-md-center align-items-center'>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className=' bi bi-folder'></i>
                    <p className='fs-6'>I.Podstawy</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className=" bi bi-folder"></i>
                    <p className='fs-6'>2.Aplikacje</p>
                </div>
            </div>
            <div className='row justify-content-md-center '>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className='bi bi-folder'></i>
                    <p className='fs-6'>III.Strategie</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className='bi bi-folder'></i>
                    <p className='fs-6'>IV.Wydarzenia</p>
                </div>
            </div>
            <div className='row  justify-content-md-center '>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className='bi bi-folder'></i>
                    <p className='fs-6 '>V.Zarządzanie</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className='bi bi-folder'></i>
                    <p className='fs-6'>VI.Słownik</p>
                </div>
            </div>
            <div className='row  justify-content-md-center '>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className='bi bi-folder'></i>
                    <p className='fs-6'>VII.Mentoring</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className='bi bi-folder'></i>
                    <p className='fs-6'>VIII. Todo</p>
                </div>
            </div>                        
        </div>
            
    )
}
export default Material  