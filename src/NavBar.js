import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarCenterModule from './NavBarModules/NavBarCenterModule';
import NavBarLeftModule from './NavBarModules/NavBarLeftModule';
import NavBarRightModule from './NavBarModules/NavBarRightModule';

const NavBar = (props) => {

const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial, visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;
const {backgroundColor,setBackgroundColor} = props;

return(
    <div>
        <nav className="navbar navbar-dark border-bottom border-secondary"> 
                <NavBarLeftModule />
                <NavBarCenterModule visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy} 
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
                                    visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                                    visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}
                />
                <NavBarRightModule  backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
        </nav>
    </div>
    )
}

export default NavBar;