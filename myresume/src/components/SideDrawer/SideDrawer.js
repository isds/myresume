import React from 'react';

import './SideDrawer.css';

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a onClick={props.click} href="#header">Home</a></li>
        <li><a onClick={props.click} href="#about">About</a></li>
        <li><a onClick={props.click} href="#education">Education</a></li>
        <li><a onClick={props.click} href="#experience">Experience</a></li>
        <li><a onClick={props.click} href="#skills">Skills</a></li>
      </ul>
    </nav>
  )
};

export default SideDrawer;