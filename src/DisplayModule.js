//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayCenterModule from './DisplayModules/DisplayCenterModule';

// centered module with nested components
const DisplayModule = (props) => {
    
    const {visibilityStrategy,setVisibilityStrategy} =props;

    return(
        <div style={{height: "auto"}} className="align-items-center justify-content-center m-1" > 
             <DisplayCenterModule  visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}/>
        </div>
        
    )
}

export default DisplayModule;