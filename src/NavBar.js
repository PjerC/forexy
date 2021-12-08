import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = (props) => {


return(

    <div>
        <nav className="navbar navbar-dark border border-secondary"> 
            <div className="container-fluid justify-content-evenly">
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                    <i class="bi bi-file-earmark-bar-graph"> Strategie </i></button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                    <i class="bi bi-journal-bookmark-fill"> Materiały </i>
                </button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                    <i class="bi bi-file-earmark-text"> Testy </i>
                </button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                    <i class="bi bi-bar-chart"> Zagrania</i>
                </button>
            </div>
        </nav>
    </div>
       
    )
}

export default NavBar;