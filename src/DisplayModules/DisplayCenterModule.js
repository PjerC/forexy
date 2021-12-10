import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Strategy from '../ContentModules/Stategy.js';
import Material from '../ContentModules/Material.js';

const DisplayCenterModule = (props) => {
    // visibility display initial states
    const {visibilityStrategy,setVisibilityStrategy, visibilityMaterial, setVisibilityMaterial} = props;
 

    return(
        <div className="d-flex flex-grow-1 justify-content-center align-items-center border border-warning m-2">
         {visibilityStrategy && <Strategy />}
         {visibilityMaterial && <Material />}
        </div>
    )
}
export default DisplayCenterModule;