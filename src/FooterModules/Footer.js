import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './FooterStyles.css'
import 'bootstrap';

const Footer = (props) => {
    
    return(
        <div  className="d-flex flex-row m-1 border-top border-secondary">       
       
            <div id="collapsedFooter" className=" container-fluid justify-content-evenly ">
                <a href="https://github.com/PjerC" rel="noreferrer" target="_blank"className="flex-fill m-2 btnFooter" type="button"><i className="bi bi-github text-secondary"></i></a>
                <a href="https://www.linkedin.com/in/piotr-ciesielski-a054b2132/" rel="noreferrer" target="_blank" className="flex-fill m-2 btnFooter" type="button"><i className="bi bi-linkedin text-secondary"></i></a>
                <a href="https://www.instagram.com/pjer_trader/" rel="noreferrer" target="_blank" className="flex-fill m-2 btnFooter" type="button"><i className="bi bi-instagram text-secondary"></i></a>
                <a href="https://www.youtube.com/channel/UC9aF9YX0otr1D_3tFl-Q9cA"  rel="noreferrer" target="_blank"className=" m-2 btnFooter" type="button"><i className="bi bi-youtube text-secondary"></i></a>
                <a href=" "rel="noreferrer" target="" className="disabledHref flex-fill m-2 btnFooter" type="button"><i className="bi bi-discord text-secondary"
                data-bs-toggle="tooltip" data-bs-placement="top" title="email to piotrcieadv2@gmail.com for invitation link"></i></a>
            </div>
         </div>
    )
}

export default Footer;