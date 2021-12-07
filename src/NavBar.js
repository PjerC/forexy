import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './img/navBar/logo_RP.PNG' 
const NavBar = (props) => {


return(

    <div>
        <nav className="navbar navbar-dark bg-dark"> 
            <div className="container-fluid justify-content-evenly">
                <button className="flex-fill btn btn-lg btn-outline-secondary m-2" type="button"> Strategie </button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-2" type="button"> Materiały </button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-2" type="button"> Testy </button>
                <button className="flex-fill btn btn-lg btn-outline-secondary m-2" type="button"> Zagrania </button>
            </div>
        </nav>
    </div>
       
    )
}

export default NavBar;