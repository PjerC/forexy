import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarRightModule = (props) => {
    const {setBackgroundColor} = props;

    const changeBackgroundColor = () => {setBackgroundColor('white')}
    return (
        <div> 
            <button className="disabled flex-fill btn btn-sm text-secondary m-1 navBarBtn" type="button"><i className="bi bi-yin-yang" onClick={changeBackgroundColor}></i></button>
        </div>
    )
}
export default NavBarRightModule;