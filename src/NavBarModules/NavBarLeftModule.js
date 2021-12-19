import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarLeftModule = (props) => {
    const {setVisibilityMaterial,setVisibilityPositions,setVisibilityStrategy,setVisibilityTests} = props;
    return (
        <div>
            <button className="flex-fill btn btn-sm text-secondary fw-bold m-1 navBarBtn shadow-none" type="button" onClick={()=> {
                setVisibilityStrategy(false);
                setVisibilityMaterial(false);
                setVisibilityTests(false);
                setVisibilityPositions(false);
            }}><i className="bi bi-house" ></i></button>
        </div>
    )
}
export default NavBarLeftModule;