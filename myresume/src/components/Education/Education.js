import React, { Component } from 'react';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.css';

const EducationCard = (props) => {
  return (
    <div className="education-card">
      <div className="education-card-institution">{props.institution}</div>
      <div className="education-card-end-date">{props.endDate}</div>
      <div className="education-card-course">{props.course}</div>
    </div>
  );
}


class Education extends Component {
  render() {
    return (
      <div id="education" className="education-container">
        <div className="education-title">
          <span>
            Education
          </span>
        </div>

        <EducationCard
          institution={'EEEP Paulo Petrola'}
          endDate={'2010'}
          course={'Information Technology Technician'}
        />

        <EducationCard
          institution={'Greate Fortaleza Metropolitan University'}
          endDate={'2016'}
          course={'Analysis Systems Development'}
        />
      </div>
    );
  }
}

export default Education;