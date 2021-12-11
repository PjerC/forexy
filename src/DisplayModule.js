//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayCenterModule from './DisplayModules/DisplayCenterModule';

// centered module with nested components
const DisplayModule = (props) => {
    
    const {visibilityStrategy,setVisibilityStrategy, visibilityMaterial, setVisibilityMaterial, visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;

    return(
        <div className="d-flex flex-grow-1 w-100 align-self-center justify-content-center m-1" >
            <DisplayCenterModule   visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial} 
                                    visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                                    visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}
                                    
             />
        </div>
        
    )
}

export default DisplayModule;