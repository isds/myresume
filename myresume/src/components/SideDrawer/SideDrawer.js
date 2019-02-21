import React from 'react';

import './SideDrawer.css';

const SideDrawer = (pros) => (
  <nav className="side-drawer">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
    </ul>
  </nav>
);

export default SideDrawer;