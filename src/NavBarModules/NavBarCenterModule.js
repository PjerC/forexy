import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBarStyles.css';

    // TO DO przerobic stany widocznosci na jeden obiekt
const NavBarCenterModule = (props) => {
    const [btnBackgroundColor,setBtnBackgroundColor] = useState('none')
    const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial,visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;
    // visibility functions management 
    const hideOthenThanStrategyModules = () => {
        setVisibilityTests(false);
        setVisibilityPositions(false);
        setVisibilityMaterial(false);
    } 

    const showStrategyModule = () => {
        // btn
        setBtnBackgroundColor('underline')
        //modules
        setVisibilityStrategy(true);
        setVisibilityMaterial(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showMaterialModule = () => {
        // btn underline visibility
        setBtnBackgroundColor('none')
        setVisibilityMaterial(!visibilityMaterial);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showTestsModule = () => {
        // btn underline visibility
        setBtnBackgroundColor('none')
        setVisibilityTests(!visibilityTests);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityPositions(false);
    }
    const showPositionsModule = () => {
        // btn underline visibility
        setBtnBackgroundColor('none')
        setVisibilityPositions(!visibilityPositions);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
    }
    return(
    
        <div>           
            <button  style={{textDecoration:btnBackgroundColor}} className="flex-fill btn btn-lg text-secondary btnBackgroundColor m-1 navBarBtn shadow-none " type="button" onMouseEnter={showStrategyModule} onMouseLeave={hideOthenThanStrategyModules}>
                <i class="bi bi-file-earmark-bar-graph navBarBtn shadow-none"></i> Strategy  </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showMaterialModule} >
                <i class="bi bi-journal-bookmark-fill "> </i> Learn </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showTestsModule} >
                <i class="bi bi-file-earmark-text"></i> Tests </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showPositionsModule}  >
                <i class="bi bi-bar-chart"></i> Positions </button>
        </div>

    )
}

export default NavBarCenterModule;