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
      <div id="footer" className="row justify-content-center footer-container">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <p>Copyright © 2019 Ítalo S. de Souza</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <a href="https://github.com/isds" ><p><FontAwesomeIcon icon={faGithub} /></p></a>
        </div>
      </div >
    );
  }
}

export default Footer;