import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Strategy from '../ContentModules/Stategy.js';

const DisplayCenterModule = (props) => {
    // visibility display initial states
    const {visibilityStrategy,setVisibilityStrategy} = props;

    const showStrategyModule = () => {setVisibilityStrategy(true);}

    return(
        <div  className="border border-secondary m-2"> 
         <button className="btn btn-primary m-2" type="button" onClick={showStrategyModule}> show </button>
         { visibilityStrategy && <Strategy /> }
        </div>
    )
}
export default DisplayCenterModule;