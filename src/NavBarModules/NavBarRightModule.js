import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarRightModule = (props) => {
    const {backgroundColor,setBackgroundColor} = props;
    
    const changeBackgroundColor = () => {setBackgroundColor(!backgroundColor)}
    return (
        <div> 
            <button className="d-flex justify-content-start align-items-center btn btn-sm text-secondary m-2 navBarBtn shadow-none" type="button"><i className="bi bi-yin-yang" onClick={changeBackgroundColor}></i></button>
        </div>
    )
}
export default NavBarRightModule;