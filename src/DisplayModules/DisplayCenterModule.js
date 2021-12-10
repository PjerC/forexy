import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Strategy from '../ContentModules/Stategy.js';
import Material from '../ContentModules/Material.js';
import Tests from '../ContentModules/Tests.js';
import Positions from '../ContentModules/Positions.js';

const DisplayCenterModule = (props) => {
    // visibility display initial states
    const {visibilityStrategy, visibilityMaterial, visibilityTests, visibilityPositions} = props;
    
    return(
        <div className="d-flex flex-grow-1 justify-content-center align-items-center m-1 centerModule">
         {visibilityStrategy && <Strategy />}
         {visibilityMaterial && <Material />}
         {visibilityTests && <Tests />}
         {visibilityPositions && <Positions />}
        </div>
    )
}
export default DisplayCenterModule;