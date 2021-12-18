import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBarStyles.css';

    // TO DO przerobic stany widocznosci na jeden obiekt
const NavBarCenterModule = (props) => {
    // btns underline setter
    const [btnBackgroundColor1,setBtnBackgroundColor1] = useState('none');
    const [btnBackgroundColor2,setBtnBackgroundColor2] = useState('none');
    const [btnBackgroundColor3,setBtnBackgroundColor3] = useState('none');
    const [btnBackgroundColor4,setBtnBackgroundColor4] = useState('none');
    const {setVisibilityStrategy,setVisibilityMaterial,setVisibilityTests,setVisibilityPositions} = props;
    // visibility functions management 
    const hideOthenThanStrategyModules = () => {
        setVisibilityTests(false);
        setVisibilityPositions(false);
        setVisibilityMaterial(false);
    }
    const hideOtherThanMaterialModules = () => {
        setVisibilityPositions(false);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
    } 
    const hideOtherThanTestsModules = () => {
        setVisibilityPositions(false);
        setVisibilityStrategy(false);
        setVisibilityMaterial(false);
    } 

    const showStrategyModule = () => {
        // btn
        setBtnBackgroundColor1('underline')
        setBtnBackgroundColor2('none')
        setBtnBackgroundColor3('none')
        setBtnBackgroundColor4('none')
        //modules
        setVisibilityStrategy(true);
        setVisibilityMaterial(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showMaterialModule = () => {
        // btn underline visibility
        setBtnBackgroundColor1('none')
        setBtnBackgroundColor2('underline')
        setBtnBackgroundColor3('none')
        setBtnBackgroundColor4('none')
        setVisibilityMaterial(true);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showTestsModule = () => {
        // btn underline visibility
        setBtnBackgroundColor1('none')
        setBtnBackgroundColor2('none')
        setBtnBackgroundColor3('underline')
        setBtnBackgroundColor4('none')
        setVisibilityTests(true);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityPositions(false);
    }
    const showPositionsModule = () => {
        // btn underline visibility
        setBtnBackgroundColor1('none')
        setBtnBackgroundColor2('none')
        setBtnBackgroundColor3('none')
        setBtnBackgroundColor4('underline')
        setVisibilityPositions(true);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
    }
    return(
    
        <div>           
            <button  style={{textDecoration:btnBackgroundColor1}} className="flex-fill btn btn-sm text-secondary btnBackgroundColor m-1 navBarBtn shadow-none " type="button" onMouseEnter={showStrategyModule} onMouseLeave={hideOthenThanStrategyModules}>
                <i className="bi bi-file-earmark-bar-graph navBarBtn shadow-none"></i> Strategy  </button>
            <button style={{textDecoration:btnBackgroundColor2}} className="flex-fill btn btn-sm text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showMaterialModule} onMouseLeave={hideOtherThanMaterialModules}>
                <i className="bi bi-journal-bookmark-fill "> </i> Learn </button>
            <button style={{textDecoration:btnBackgroundColor3}} className="flex-fill btn btn-sm text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showTestsModule} onMouseLeave={hideOtherThanTestsModules}>
                <i className="bi bi-file-earmark-text"></i> Tests </button>
            <button style={{textDecoration:btnBackgroundColor4}} className="flex-fill btn btn-sm text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showPositionsModule}  >
                <i className="bi bi-bar-chart"></i> Positions </button>
        </div>

    )
}

export default NavBarCenterModule;