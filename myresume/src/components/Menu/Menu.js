import React, { Component } from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Menu.css';

const Menu = (props) => (
  <div className="menu">
    <nav className="menu-navigation">
      <div className="menu-toogle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
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


export default Menu;