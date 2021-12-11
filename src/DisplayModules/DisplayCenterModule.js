import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Strategy from '../ContentModules/Stategy.js';
import Material from '../ContentModules/Material.js';
import Tests from '../ContentModules/Tests.js';
import Positions from '../ContentModules/Positions.js';
import StrategyPreview from '../ContentModules/StrategyPreview.js'
import StrategyMixed from '../ContentModules/StrategyMixed.js';


const DisplayCenterModule = (props) => {
    // visibility display initial states
    const [previewText,setPreviewText] = useState('Choose one strategy:');
    const {visibilityStrategy, visibilityMaterial, visibilityTests, visibilityPositions} = props;
    // jesli aktywny modul 'strategia' pokaz modul preview content strategy
    return(
        <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center m-1 centerModule">
                {visibilityStrategy && <StrategyPreview previewText={previewText}  />}
                {visibilityStrategy && <Strategy  setPreviewText={setPreviewText}/>}
                {visibilityStrategy && <StrategyMixed/>}
                {visibilityMaterial && <Material />}
                {visibilityTests && <Tests />}
                {visibilityPositions && <Positions />}
            </div>
    )
}
export default DisplayCenterModule;