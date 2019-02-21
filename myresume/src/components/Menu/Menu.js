import React, { Component } from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Menu.css';

class NavigarionContatiner extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="menu">
        <nav className="menu-navigation">
          <div>
            <DrawerToggleButton />
          </div>
          <div className="menu-logo"><a href="/">Home</a></div>

          <div className="spacer"></div>

          <div className="menu-navigation-items">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigarionContatiner;