import React, { Component } from 'react';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.css';


class Education extends Component {
  render() {
    return (
      <div id="education" className="education-container">
        <div>
          <span className="education-title">
            Education
          </span>

          <div className="job-card-divisor"></div>

          <div>
            <div className="education-card">
              <strong>EEEP Paulo Petrola</strong>
              <p>Information Technology Technician</p>
            </div>
          </div>

          <div className="education-card-divisor"></div>

          <div>
            <div className="education-card">
              <strong>Greate Fortaleza Metropolitan University</strong>
              <p>Analysis Systems Development</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Education;