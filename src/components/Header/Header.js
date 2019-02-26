import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div id="header" className="header-container">
        <div>
          <h1 className="full-name">ÍTALO SILVA</h1>
          <h2 className="occupation">Software Developer</h2>
          <br />
          <a href={'https://drive.google.com/open?id=1qjHUWX12u0vV3xiDYCOvxM_rBi5MV-UX'} className="btn-rounded-white" download>Download Resume</a>
        </div>
      </div>
    );
  }
}

export default Header;