import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './HomePage.js';
import Strategy from '../ContentModules/Stategy.js';
import Material from '../ContentModules/Material.js';
import Tests from '../ContentModules/Tests.js';
import Positions from '../ContentModules/Positions.js';
import './DisplayModules.css'


const DisplayCenterModule = (props) => {
    // visibility display initial states
    const [previewText,setPreviewText] = useState('Wybierz strategie');
    // first modules visibility management
    const { visibilityStrategy,setVisibilityStrategy,
            visibilityMaterial, 
            visibilityTests, 
            visibilityPositions,
            visibilityHomePage} = props;
    // second modules nested visibilit management
    
    return(
        <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center m-1">
                {visibilityHomePage && <HomePage/>}
                {visibilityStrategy && <Strategy  setPreviewText={setPreviewText} previewText={previewText} 
                                                  setVisibilityStrategy={setVisibilityStrategy}
                                                  
                                                  />}   
                {visibilityMaterial && <Material />}
                {visibilityTests && <Tests />}
                {visibilityPositions && <Positions />}
            </div>
    )
}
export default DisplayCenterModule;