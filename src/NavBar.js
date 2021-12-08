import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './img/navBar/logo_RP.PNG' 
const NavBar = (props) => {


return(

    <div>
        <nav className="navbar navbar-dark border border-secondary"> 
            <div className="container-fluid justify-content-evenly">
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button">
                    <i class="bi bi-bar-chart"></i> Strategie img</button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button"> Materiały img</button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button"> Testy img</button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-1" type="button"> Zagrania img</button>
            </div>
        </nav>
    </div>
       
    )
}

export default NavBar;