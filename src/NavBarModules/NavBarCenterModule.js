import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBarCenterModule = (props) => {
    return(
    
        <div>           
            <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                <i class="bi bi-file-earmark-bar-graph"></i> Strategie </button>
            <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                <i class="bi bi-journal-bookmark-fill"> </i> Materiały </button>
            <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                <i class="bi bi-file-earmark-text"></i> Testy </button>
            <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                <i class="bi bi-bar-chart"></i> Zagrania </button>
        </div>

    )
}

export default NavBarCenterModule;