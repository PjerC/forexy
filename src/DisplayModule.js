import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayUpperModule from './DisplayModules/DisplayUpperModule';

// centered module with nested components
const DisplayModule = () => {
    return(
        <div>
            <DisplayUpperModule />
        </div>
        
    )
}

export default DisplayModule;