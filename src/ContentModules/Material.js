import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
import MaterialItems from './MaterialItems';
import MaterialPreview from './MaterialPreview'
import { useState } from 'react';


const Material = (props) => {
    // pl
    const [materialPreview,setMaterialPreview] = useState('najedz kursorem, aby wyświetlić zawartość')
    // visibility initial state 

    
    return (
        <div className='d-flex flex-wrap flex-row w-100 text-secondary align-content-around justify-content-center m-2 border border-primary'>
                   <MaterialItems materialPreview={materialPreview} setMaterialPreview={setMaterialPreview}/>    
                   <MaterialPreview/>
        </div>
            
    )
}
export default Material  