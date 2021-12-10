//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayCenterModule from './DisplayModules/DisplayCenterModule';

// centered module with nested components
const DisplayModule = (props) => {
    
    const {visibilityStrategy,setVisibilityStrategy, visibilityMaterial, setVisibilityMaterial} =props;

    return(
        <div className="d-flex flex-grow-1 w-100 align-self-center justify-content-center m-2 border border-secondary" >
             <DisplayCenterModule   visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial} 
             />
        </div>
        
    )
}

export default DisplayModule;