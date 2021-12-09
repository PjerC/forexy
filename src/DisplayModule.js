import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayCenterModule from './DisplayModules/DisplayCenterModule';
//import DisplayUpperModule from './DisplayModules/DisplayUpperModule';

// centered module with nested components
const DisplayModule = (props) => {
    return(
        <div  className="justify-content-center align-items-center" >
             <DisplayCenterModule />
        </div>
        
    )
}

export default DisplayModule;