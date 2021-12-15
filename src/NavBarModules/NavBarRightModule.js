import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarRightModule = (props) => {
    const {backgroundColor,setBackgroundColor} = props;
    
    const changeBackgroundColor = () => {setBackgroundColor(!backgroundColor)}
    return (
        <div> 
            <button className="flex-fill btn btn-sm text-secondary m-1 navBarBtn shadow-none" type="button"><i className="bi bi-yin-yang" onClick={changeBackgroundColor}></i></button>
        </div>
    )
}
export default NavBarRightModule;