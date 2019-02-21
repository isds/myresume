import React, { Component } from 'react';

import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../SideDrawer/SideDrawer';
import Menu from '../Menu/Menu';

import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact'


import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
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