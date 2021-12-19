import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContentModules.css';
import MaterialPreviewBasics from '../MaterialContent/MaterialPreviewBasics';
import MaterialPreviewApps from '../MaterialContent/MaterialPreviewApps';

const MaterialItems = (props) => {

    const {materialPreview,visibility} = props;
    return (
        <div className='d-flex justify-content-center align-items-center m-2 border border-primary flex-grow-1 '>
            <p className='fs-4'>{materialPreview}</p>

           {visibility[0] && <MaterialPreviewBasics/>}
           {visibility[1] && <MaterialPreviewApps/>}

    </div> 
    )
}
export default MaterialItems;