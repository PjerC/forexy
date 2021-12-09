import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tests from '../ContentModules/Tests.js';
import Material from '../ContentModules/Material.js';
import Strategy from '../ContentModules/Stategy.js';
import Positions from '../ContentModules/Positions.js';

const DisplayCenterModule = (props) => {
    // visibility display initial states
    const [visibilityStrategy,setVisibilityStrategy] = useState(false);

    const showStrategyModule = () => {
        setVisibilityStrategy(true);
    }
    return(
        <div  className="border border-secondary m-2"> 
         <button className="btn btn-primary m-2" type="button" onClick={showStrategyModule}> show </button>
         { visibilityStrategy== true &&  <Strategy /> }
        </div>
    )
}
export default DisplayCenterModule;