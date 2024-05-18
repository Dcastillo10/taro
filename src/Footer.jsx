import "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies Policy</a>
          <a href="/">Cookie Preferences</a>
          <a href="/">Admin Profile</a>
        </div>
        <div className="social-links">
        <a><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        <a><FontAwesomeIcon icon={faTiktok} size="2x" /></a>
      </div>
      </footer>
    );
  }