import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Strategy from '../ContentModules/Stategy.js';

const DisplayCenterModule = (props) => {
    // visibility display initial states
    const {visibilityStrategy,setVisibilityStrategy} = props;

    const showStrategyModule = () => {setVisibilityStrategy(true);}

    return(
        <div className="justify-content-center align-items-center border border-primary m-2">  center module  
         { visibilityStrategy && <Strategy /> }
        </div>
    )
}
export default DisplayCenterModule;