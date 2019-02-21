import React, { Component } from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact'


export default class Body extends Component {
  render() {
    return (
      // <div id="body" className="col">
      <div id="body">
        <About />
        
        <Education />

        <Experience />

        <Skills />
        
        <Contact />
      </div>
    );
  }
}