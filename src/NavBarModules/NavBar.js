import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarCenterModule from './NavBarCenterModule';
import NavBarRightModule from './NavBarRightModule';

const NavBar = (props) => {

const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial, visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;
const {backgroundColor,setBackgroundColor} = props;

return(
    <div className='fixed-top d-flex flex-row justify-content-center m-2'>
                <a href="#offcanvaser" className="btn btn-lg  navBarBtn text-secondary shadow-none border border-secondary m-2" type="button" data-bs-toggle="offcanvas" aria-expanded="false" aria-controls="collapser">
                    <i className="bi bi-list" ></i></a>
                    
                <div id="offcanvaser" className='offcanvas offcanvas-start bg-dark' tabindex="-1" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 className='offcanvas-title text-secondary'><i class="bi bi-cash-coin"></i> Robie Piniondz </h5>
                </div>

                <div id='navBarContainer' className='d-flex flex-column justify-content-center m-1'>  
                    <NavBarCenterModule visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy} 
                                    visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
                                    visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                                    visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}/>
                    <NavBarRightModule  backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
                </div>
                </div>    

    </div>
    )
}

export default NavBar;