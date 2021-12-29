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
        {textDecoration:'none',fontWeight:'normal'},
        {textDecoration:'none',fontWeight:'normal'}]);

    const {setVisibilityStrategy,setVisibilityMaterial,setVisibilityTests,setVisibilityPositions,setVisibilityHomePage} = props;
    // visibility functions management 
    const showMainPage = () => {
        // btn
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'}])
        //modules
        setVisibilityHomePage(true);
        setVisibilityStrategy(false);
        setVisibilityMaterial(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };    
    const showStrategyModule = () => {
        // btn
        setStyler([{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'}])
        //modules
        setVisibilityHomePage(false);
        setVisibilityStrategy(true);
        setVisibilityMaterial(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showMaterialModule = () => {
        // btn styling
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'}])
        setVisibilityHomePage(false);
        setVisibilityMaterial(true);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showTestsModule = () => {
        // btn styling
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'}])
        setVisibilityHomePage(false);
        setVisibilityTests(true);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityPositions(false);
    }
    const showPositionsModule = () => {
        // btn styling
        setStyler([{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'none',fontWeight:'normal'},{textDecoration:'underline',fontWeight:'bold'},{textDecoration:'none',fontWeight:'normal'}])
        setVisibilityHomePage(false);
        setVisibilityPositions(true);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
    }
    return(
    
        <div className='border-bottom border-secondary d-flex flex-column m-2 justify-content-start'>
             <button  style={styler[4]} className="d-flex align-items-center justify-content-start text-secondary btn btn-md btnBackgroundColor m-2 navBarBtn shadow-none " type="button" onClick={showMainPage} >
                <i className="bi bi-house navBarBtn shadow-none"></i><p className='m-1'>Strona główna</p></button>                      
            <button  style={styler[0]} className="d-flex align-items-center justify-content-start text-secondary btn btn-md btnBackgroundColor m-2 navBarBtn shadow-none " type="button" onClick={showStrategyModule} >
                <i className="bi bi-file-earmark-bar-graph navBarBtn shadow-none"></i><p className='m-1'>Strategie</p></button>
            <button style={styler[1]} className="d-flex align-items-center justify-content-start text-secondary flex-fill btn btn-md m-2 navBarBtn shadow-none" type="button" onClick={showMaterialModule} >
                <i className="bi bi-journal-bookmark-fill "> </i><p className='m-1'>Materiały</p> </button>
            <button  style={styler[2]} className="d-flex align-items-center justify-content-start text-secondary  flex-fill btn btn-md m-2 navBarBtn shadow-none" type="button" onClick={showTestsModule} >
                <i className="bi bi-file-earmark-text"></i><p className='m-1'>Testy</p></button>
            <button  style={styler[3]} className="d-flex align-items-center justify-content-start text-secondary flex-fill btn btn-md m-2 navBarBtn shadow-none" type="button" onClick={showPositionsModule}  >
                <i className="bi bi-bar-chart"></i><p className='m-1'>Zagrania</p></button>
        </div>

    )
}

export default NavBarCenterModule;