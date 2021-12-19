import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarCenterModule from './NavBarCenterModule';
import NavBarLeftModule from './NavBarLeftModule';
import NavBarRightModule from './NavBarRightModule';

const NavBar = (props) => {

const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial, visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;
const {backgroundColor,setBackgroundColor} = props;

return(
    <div>
        <div>
        <nav className="navbar flex-nowrap navbar-dark"> 
                <NavBarLeftModule   visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
                                    visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                                    visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}                                   
                                    />
                <NavBarCenterModule visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy} 
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
                                    visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                                    visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}
                />
                <NavBarRightModule  backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
        </nav>
        </div>

    </div>
    )
}

export default NavBar;