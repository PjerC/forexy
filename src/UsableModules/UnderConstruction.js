import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './UsableModules.css';

const UnderConstruction = (props) => {

    return (
        <div className="text-primary d-flex flex-grow-1 h-100 justify-content-center align-items-center ">
            <i class="fs-1 bi bi-currency-bitcoin animRotate"></i>
            <p> under construction </p>
            <i class="fs-1 bi bi-currency-dollar animRotate"></i>
        </div>
            
    )
}
export default UnderConstruction  