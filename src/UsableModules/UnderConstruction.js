import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './UsableModules.css';

const UnderConstruction = (props) => {

    return (
        <div className="border-top  border-secondary text-primary d-flex flex-grow-1  justify-content-center align-items-center ">
            <i className="fs-1 bi bi-currency-bitcoin animRotate"></i>
            <p> under construction </p>
            <i className="fs-1 bi bi-currency-dollar animRotate"></i>
        </div>
            
    )
}
export default UnderConstruction  