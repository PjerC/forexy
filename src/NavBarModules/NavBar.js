import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarCenterModule from './NavBarCenterModule';
import NavBarRightModule from './NavBarRightModule';
import '../custom.scss';
const NavBar = (props) => {

const {visibilityStrategy,setVisibilityStrategy,visibilityMaterial,setVisibilityMaterial, visibilityTests,setVisibilityTests,visibilityPositions,setVisibilityPositions} = props;
const {backgroundColor,setBackgroundColor} = props;

return(
    <div className='fixed-top d-flex flex-row justify-content-start m-1'>
                <a href="#offcanvaser" className="btn btn-lg navBarBtn text-secondary shadow-none border border-secondary m-1" type="button" data-bs-toggle="offcanvas" aria-expanded="false" aria-controls="collapser">
                    <i className="bi bi-list" ></i></a>
                    
                <div id="offcanvaser" className='d-flex p-1 border border-secondary  horizontal-width-10 offcanvas offcanvas-start bg-dark' tabIndex="-1" aria-labelledby="offcanvas1">
                <div className="offcanvas-header">
                    <h5 className='offcanvas-title text-secondary fw-bold'><i className="bi bi-cash-coin"></i> Robie Piniondz </h5>
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