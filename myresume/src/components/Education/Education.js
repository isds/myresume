import React, { Component } from 'react';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.css';


class Education extends Component {
  render() {
    return (
      <div id="education" className="education-container">
        <div className="education-title">
          <span>
            Education
          </span>
        </div>

        <div className="education-card">
          <strong>EEEP Paulo Petrola</strong>
          <p>Information Technology Technician</p>
        </div>

        <div className="education-card">
          <strong>Greate Fortaleza Metropolitan University</strong>
          <p>Analysis Systems Development</p>
        </div>

      </div>
    );
  }
}

export default Education;