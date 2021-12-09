import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarCenterModule from './NavBarModules/NavBarCenterModule';
import NavBarLeftModule from './NavBarModules/NavBarLeftModule';
import NavBarRightModule from './NavBarModules/NavBarRightModule';

const NavBar = (props) => {


return(
    <div>
        <nav className="navbar navbar-dark border-bottom border-secondary"> 
                <NavBarLeftModule />
                <NavBarCenterModule />
                <NavBarRightModule />
        </nav>
    </div>
    )
}

export default NavBar;