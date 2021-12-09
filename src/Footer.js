import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './FooterModules/FooterStyles.css'

const Footer = () => {

    return(
        <div  className="m-0 border-top border-secondary"> 
            <div className="container-fluid justify-content-evenly">
                <button className="flex-fill btn btn-lg m-1 btnFooter" type="button"><i class="bi bi-envelope text-secondary"></i></button>
                <button className="flex-fill btn btn-lg m-1 btnFooter" type="button"><i class="bi bi-linkedin text-secondary"></i></button>
                <button className="flex-fill btn btn-lg m-1 btnFooter" type="button"><i class="bi bi-instagram text-secondary"></i></button>
                <button className="flex-fill btn btn-lg m-1 btnFooter" type="button"><i class="bi bi-youtube text-secondary"></i></button>
            </div>
         </div>
    )
}

export default Footer;