import React, { Component } from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
  render() {
    return (
      <div id="about" className="about-container row justify-content-center">
        <div className="col-8">
          <div className="row justify-content-center">
            <span className="about-container-title">About Me</span>
          </div>

          <div className="row text-justify">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           I'm a passionate programmer, experienced with web development who wish to make
           a better world trhoug information. I have experience with: Django, Flask, 
           SQLAlchemy, Peewee, Falcon and other python libraries. Currently I'm a volunteer at
           NGO in my neighborhood, as social educator. I'm looking for a good company to work
           in.
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default About;