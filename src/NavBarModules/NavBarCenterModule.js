import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBarStyles.css';

    // TO DO przerobic stany widocznosci na jeden obiekt
const NavBarCenterModule = (props) => {

    // btns underline setter
    const [styler,setStyler] = useState([
        {textDecoration:'none',fontWeight:'normal'},
        {textDecoration:'none',fontWeight:'normal'},
        {textDecoration:'none',fontWeight:'normal'},
        {textDecoration:'none',fontWeight:'normal'}]);

    const {setVisibilityStrategy,setVisibilityMaterial,setVisibilityTests,setVisibilityPositions} = props;
    // visibility functions management 
    const showStrategyModule = () => {
        // btn
        setStyler([{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'}])
        //modules
        setVisibilityStrategy(true);
        setVisibilityMaterial(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showMaterialModule = () => {
        // btn styling
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'}])
        setVisibilityMaterial(true);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showTestsModule = () => {
        // btn styling
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'}])
        setVisibilityTests(true);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityPositions(false);
    }
    const showPositionsModule = () => {
        // btn styling
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'}])
        setVisibilityPositions(true);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
    }
    return(
    
        <div className='border-bottom border-secondary'>           
            <button  style={styler[0]} className="flex-fill btn btn-md text-secondary btnBackgroundColor m-1 navBarBtn shadow-none " type="button" onClick={showStrategyModule} >
                <i className="bi bi-file-earmark-bar-graph navBarBtn shadow-none"></i> Strategie </button>
            <button style={styler[1]} className="flex-fill btn btn-md text-secondary m-1 navBarBtn shadow-none" type="button" onClick={showMaterialModule} >
                <i className="bi bi-journal-bookmark-fill "> </i> Materiały </button>
            <button  style={styler[2]} className="flex-fill btn btn-md text-secondary m-1 navBarBtn shadow-none" type="button" onClick={showTestsModule} >
                <i className="bi bi-file-earmark-text"></i> Testy </button>
            <button  style={styler[3]} className="flex-fill btn btn-md text-secondary m-1 navBarBtn shadow-none" type="button" onClick={showPositionsModule}  >
                <i className="bi bi-bar-chart"></i> Zagrania </button>
        </div>

    )
}

export default NavBarCenterModule;