import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayCenterModule from './DisplayModules/DisplayCenterModule';
//import DisplayUpperModule from './DisplayModules/DisplayUpperModule';

// centered module with nested components
const DisplayModule = (props) => {
    const {setVisibilityStrategy} = props;

    return(
        <div style={{height: "auto"}} className="align-items-center justify-content-center m-1" > 
             <DisplayCenterModule  setVisibilityStrategy={setVisibilityStrategy}/>
        </div>
        
    )
}

export default DisplayModule;