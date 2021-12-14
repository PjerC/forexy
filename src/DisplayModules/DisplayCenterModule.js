import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Strategy from '../ContentModules/Stategy.js';
import Material from '../ContentModules/Material.js';
import Tests from '../ContentModules/Tests.js';
import Positions from '../ContentModules/Positions.js';
import StrategyPreview from '../ContentModules/StrategyPreview.js'


const DisplayCenterModule = (props) => {
    // visibility display initial states
    const [previewText,setPreviewText] = useState('Wybierz strategie');
    const {visibilityStrategy, visibilityMaterial, visibilityTests, visibilityPositions} = props;
    // jesli aktywny modul 'strategia' pokaz modul preview content strategy
    return(
        <div className="d-flex flex-column justify-content-center align-items-center centerModule border border-primary w-50">     
                {visibilityStrategy && <Strategy  setPreviewText={setPreviewText}/>}
                {visibilityStrategy && <StrategyPreview previewText={previewText}  />}
                {visibilityMaterial && <Material />}
                {visibilityTests && <Tests />}
                {visibilityPositions && <Positions />}
            </div>
    )
}
export default DisplayCenterModule;