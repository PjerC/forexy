//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayCenterModule from './DisplayModules/DisplayCenterModule';

// centered module with nested components
const DisplayModule = (props) => {
    
    const {visibilityStrategy,setVisibilityStrategy} =props;

    return(
        <div className="flex-grow-1 w-100 align-self-center justify-content-center m-2 border border-warning" >
            display module 
             <DisplayCenterModule  visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}/>
        </div>
        
    )
}

export default DisplayModule;