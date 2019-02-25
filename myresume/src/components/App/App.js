import React, { Component } from 'react';

import Header from '../Header/Header';
import '../SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Backdrop from '../Backdrop/Backdrop';

import './App.css';
import SideDrawer from '../SideDrawer/SideDrawer';


class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !this.state.sideDrawerOpen };
    })
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <div>
        <Menu drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>;
        {backdrop}
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;