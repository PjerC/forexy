import  './NavBarStyle.css'

const NavBar = (props) => {
    return(
            <div className="navBarStyle">
                <div style={{display:"flex",flexDirection:"row"}} >
                    <a  className="linkBtn" target=""> btn1 </a>
                    <a  className="linkBtn" target=""> btn1 </a>
                    <a  className="linkBtn" target=""> btn1 </a>
                </div>
            </div>
    )
}

export default NavBar;