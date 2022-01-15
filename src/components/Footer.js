import React from 'react';
// import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


function Footer({}) {
    return (
        <footer className="App-footer">
          <div className="social-links">
            <p className="footer-text">Check us out on Github and LinkedIn!</p>
            <a 
              href="https://github.com/humkeyg/Career-Cone-1.0"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </footer>
    )
};

export default Footer;