import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
import MaterialItems from './MaterialItems';
//import { useState } from 'react';


const Material = (props) => {
    
    return (
        <div className='d-flex flex-wrap flex-row w-100 text-secondary align-content-around justify-content-center m-2'>
                   <MaterialItems />    
        </div>
            
    )
}
export default Material  