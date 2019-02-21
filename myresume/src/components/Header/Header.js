import React, { Component } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../Menu/Menu';
class Header extends Component {
  render() {
    return (
      <div className="header-container">
          <Menu />

          <div>
            <h1 className="full-name">ÍTALO SILVA</h1>
            <h2 className="occupation">Software Developer</h2>
            <br />
            <a href="#resume_path" className="btn-rounded-white">Download Resume</a>
          </div>
      </div>
    );
  }
}

export default Header;