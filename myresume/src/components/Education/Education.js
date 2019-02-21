import React, { Component } from 'react';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.css';


class Education extends Component {
  render() {
    return (
      <div id="education" className="education-container">{/* className="row justify-content-center" */}
        <div>{/* className="col-10 text-center" */}
          <span className="education-title">{/* className="row justify-content-center" */}
            Education
          </span>

          <div className="job-card-divisor"></div>

          <div className="row justify-content-center">
            <div className="education-card col-6 text-left">
              <strong>EEEP Paulo Petrola</strong>
              <p>Information Technology Technician</p>
            </div>
          </div>

          <div className="education-card-divisor"></div>

          <div className="row justify-content-center">
            <div className="education-card col-6 text-left">
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