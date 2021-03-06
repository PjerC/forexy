//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import DisplayCenterModule from './DisplayCenterModule';

// centered module with nested components
const DisplayModule = (props) => {
    
    const { visibilityStrategy,setVisibilityStrategy,
            visibilityMaterial, setVisibilityMaterial,
            visibilityTests,setVisibilityTests,
            visibilityPositions,setVisibilityPositions,
            visibilityHomePage,setVisibilityHomepage} = props;
    return(
        <div className="d-flex flex-grow-1 flex-column w-100  align-self-center text-secondary justify-content-center m-1">
            <DisplayCenterModule    visibilityHomePage={visibilityHomePage} setVisibilityHomepage={setVisibilityHomepage}
                                    visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial} 
                                    visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                                    visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}
                                    
             />

        </div>
        
    )
}

export default DisplayModule; 