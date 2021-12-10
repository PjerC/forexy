import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBarStyles.css';

const NavBarCenterModule = (props) => {
    
    const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial,visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;
    // visibility functions management 
    const hideDisplayModules = () => {
        // przerobic na obiekt 
        setVisibilityTests(false);
        setVisibilityStrategy(false);
        setVisibilityPositions(false);
        setVisibilityMaterial(false);
    }
    //TODO  onclick przekierowuje na nastepna strone z contentem - ze strony podgladu 

    const showStrategyModule = () => {
        setVisibilityStrategy(!visibilityStrategy);
        setVisibilityMaterial(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showMaterialModule = () => {
        setVisibilityMaterial(!visibilityMaterial);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
        setVisibilityPositions(false);
    };
    const showTestsModule = () => {
        setVisibilityTests(!visibilityTests);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityPositions(false);
    }
    const showPositionsModule = () => {

        setVisibilityPositions(!visibilityPositions);
        setVisibilityMaterial(false);
        setVisibilityStrategy(false);
        setVisibilityTests(false);
    }
    return(
    
        <div>           
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none " type="button" onMouseEnter={showStrategyModule} onMouseLeave={hideDisplayModules}>
                <i class="bi bi-file-earmark-bar-graph navBarBtn shadow-none"></i> Strategia  </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showMaterialModule} onMouseLeave={hideDisplayModules}>
                <i class="bi bi-journal-bookmark-fill "> </i> Materiały </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showTestsModule} onMouseLeave={hideDisplayModules} >
                <i class="bi bi-file-earmark-text"></i> Testy </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn shadow-none" type="button" onMouseEnter={showPositionsModule} onMouseLeave={hideDisplayModules} >
                <i class="bi bi-bar-chart"></i> Zagrania </button>
        </div>

    )
}

export default NavBarCenterModule;