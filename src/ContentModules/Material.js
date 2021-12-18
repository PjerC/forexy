import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
//import { useState } from 'react';


const Material = (props) => {
    // pl
    const objMaterials = [
        {no:'1.', title: 'Podstawy'},
        {no:'2.', title: 'Aplikacje'},
        {no:'3.', title: 'Strategie'},
        {no:'4.', title: 'Makro'},
        {no:'5.', title: 'Ryzyko'},
        {no:'6.', title: 'Notatnik'},
        {no:'7.', title: 'Słownik'},
        {no:'8.', title: 'Mentoring'},
        {no:'9.', title: 'Pozostałe'}
    ]

    return (
        <div className='container text-secondary align-items-center justify-content-center m-1'>
            <div className='row justify-content-md-center align-items-center m-1'>
                {
                    objMaterials.map((item) => 
                        <div className='col w-25 border border-secondary m-2 animScale rounded' key={item.no}>
                            <i className='bi bi-folder'></i>
                            <p className='fs-6'>{item.no+item.title}</p>
                        </div>                                
                )}
            </div>                        
        </div>
            
    )
}
export default Material  