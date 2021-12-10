import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBarStyles.css';

const NavBarCenterModule = (props) => {
    
    const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial} = props;
    const showStrategyModule = () => {
                                        setVisibilityStrategy(!visibilityStrategy)
                                        setVisibilityMaterial(false)
                                    };
    const showMaterialModule = () => {setVisibilityMaterial(!visibilityMaterial)
                                        setVisibilityStrategy(false)
                                    };
    
    return(
    
        <div>           
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn" type="button" onClick={showStrategyModule}>
                <i class="bi bi-file-earmark-bar-graph navBarBtn"></i> Strategie  </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn" type="button" onClick={showMaterialModule}>
                <i class="bi bi-journal-bookmark-fill "> </i> Materiały </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn" type="button">
                <i class="bi bi-file-earmark-text"></i> Testy </button>
            <button className="flex-fill btn btn-lg text-secondary m-1 navBarBtn" type="button">
                <i class="bi bi-bar-chart"></i> Zagrania </button>
        </div>

    )
}

export default NavBarCenterModule;