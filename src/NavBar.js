import  './NavBarStyle.css'

const NavBar = (props) => {
    return(
            <div className="navBarStyle">
                <div style={{display:"flex",flexDirection:"row"}} >
                    <button type="button" className="btn btn-primary"> btn </button>
                </div>
            </div>
    )
}

export default NavBar;