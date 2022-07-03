import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/emiliano-cabrera/';
    const facebookUrl = 'https://www.facebook.com/emii.cabrera023/';
    const instagramUrl = 'https://www.instagram.com/emi.cabrera23/';

    return(
        <div className='footerContainer'>
            <div className='startLineFooter'></div> 
            <section> 
            <footer>
                <section className="footerGrid">
                    <section className='footerSection'>
                        <h3>Seguinos en las redes:</h3>
                        <ul className="footerListContainer">
                            <div></div>
                            <div className="footerDivContainer">
                                <li><a href={linkedinUrl} target='_blanc'><FontAwesomeIcon icon={faLinkedin} className='socialMediaIcons'/></a></li>
                                <li><a href={facebookUrl} target='_blanc'><FontAwesomeIcon icon={faFacebook} className='socialMediaIcons'/></a></li>
                                <li><a href={instagramUrl} target='_blanc'><FontAwesomeIcon icon={faInstagram} className='socialMediaIcons'/></a></li>
                            </div>
                            <div></div>
                        </ul>
                    </section>
                    <section className='footerSection contactUs'>
                        <h3>Contáctanos</h3>
                        <p>+549 223 6024205</p>
                        <p>rrhh@sigma.com</p>
                        <p>Gascón 2330, Mar del Plata, Bs As, Argentina</p>
                    </section>
                    <section className='footerSection'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.7003587907475!2d-57.551819884325624!3d-38.00744907971775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1ee3c4e803%3A0x22a95817bdce3422!2sFMV%2C%20Gasc%C3%B3n%202330%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1646590430983!5m2!1ses-419!2sar" width="300" height="150" style={{border:0}} loading="lazy" title='iframe'></iframe>
                    </section>
                </section>
                <div className='endLineFooter'></div>     
                <h4>©SigmaHR. Todos los derechos reservados.</h4>
            </footer>
        </section>
    </div>
    )
}

export default Footer