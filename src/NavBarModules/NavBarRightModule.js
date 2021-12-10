import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarRightModule = (props) => {
    const {setBackgroundColor} = props;

    const changeBackgroundColor = () => {
        console.log('click')
        setBackgroundColor('white')
    }
    return (
        <div> 
            <button className="flex-fill btn btn-sm text-secondary m-1 navBarBtn" type="button"><i class="bi bi-yin-yang" onClick={changeBackgroundColor}></i></button>
        </div>
    )
}
export default NavBarRightModule;