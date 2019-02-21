import React, { Component } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="footer-container">
        <div>
          <p>Copyright © 2019 Ítalo S. de Souza</p>
        </div>
        <div>
          <a href="https://github.com/isds" ><p><FontAwesomeIcon icon={faGithub} /></p></a>
        </div>
      </div >
    );
  }
}

export default Footer;