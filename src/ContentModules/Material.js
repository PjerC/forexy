import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
import { useState } from 'react';


const Material = (props) => {
    // TO DO - zmienim onmouseleave / enter na jedna funkcje   typy false/true 

    const [folderImg,setFolderImg] = useState('text-secondary bi bi-folder');
    const changeFolderImg = () => {setFolderImg('text-secondary bi bi-folder2-open')}
    const changeImgToInitial = () => {setFolderImg('text-secondary bi bi-folder')}
    return (
        <div className='container w-50 align-items-center justify-content-center m-1 border border-warning'>
            <div className='row justify-content-md-center align-items-center'>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i className={folderImg}></i>
                    <p className='fs-6 text-secondary'>I.Podstawy</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class="text-secondary bi bi-folder"></i>
                    <p className='fs-6 text-secondary'>2.Konta i Aplikacje</p>
                </div>
            </div>
            <div className=' row justify-content-md-center '>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class={folderImg}></i>
                    <p className='fs-6 text-secondary'>III.Strategie</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class={folderImg}></i>
                    <p className='fs-6 text-secondary'>IV.Wydarzenia</p>
                </div>
            </div>
            <div className=' row  justify-content-md-center '>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class="text-secondary bi bi-folder"></i>
                    <p className='fs-6 text-secondary'>V.Zarządzanie</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class="text-secondary bi bi-folder"></i>
                    <p className='fs-6 text-secondary'>VI.Słownik</p>
                </div>
            </div>
            <div className=' row  justify-content-md-center '>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class="text-secondary bi bi-folder"></i>
                    <p className='fs-6 text-secondary'>VII.Mentoring Program</p>
                </div>
                <div className='col border border-secondary m-2 animScale rounded'>
                    <i class="text-secondary bi bi-folder"></i>
                    <p className='fs-6 text-secondary'>VIII. Todo</p>
                </div>
            </div>                        
        </div>
            
    )
}
export default Material  