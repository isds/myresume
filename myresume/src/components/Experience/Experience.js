import React, { Component } from 'react';
import './Experience.css';
import 'bootstrap/dist/css/bootstrap.css';


class ExperienceCard extends Component {
  render() {
    const textLines = this.props.text.map(
      (line, i) => <li key={i} className="experience-card-text">{line}</li>
    );
    return (
      <div id="experience" className="row justify-content-start">
        <div className="experience-card col text-left">
          <p className="experience-card-title">
            {this.props.title} <span>{this.props.date}</span>
          </p>
          <p className="experience-card-occupation">{this.props.occupation} </p>
          <ul>
            {textLines}
          </ul>
        </div>
      </div>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <div className="row justify-content-center experience-container">
        <div className="col-10 text-center">
          <div className="row justify-content-center experience-title">
            Experience
          </div>

          <ExperienceCard
            title={"CASEBRÁS Group"}
            occupation={"Trainee in the Information Technology sector"}
            date={"July 2010 - November 2010"}
            text={[
              "Remote and presencial maintenance of network assets and assistance to the end user about the correct use of the technological company assets."
            ]} />
          <div className="experience-card-divisor"></div>

          <ExperienceCard
            title={"Asyst International + Rhealeza It Services"}
            occupation={"Support Technician"}
            date={"September 2011 - October 2014"}
            text={[
              "Remote and presencial maintenance of network assets and assistance to the end user about the correct use of the technological company assets.",
              "Scripts development for automating technical solutions."
            ]} />
          <div className="experience-card-divisor"></div>

          <ExperienceCard
            title={"B&Q Energia Ltda"}
            occupation={"IT Administrative Analyst"}
            date={"November 2014 - November 2015"}
            text={[
              "Development and maintenance of databases for the high-voltage customer sector of Enel(formerly Coelce).",
              "Automation of reports with VBA and Python.",
              "Optimization of SQL queries.",
              "Extraction of Informix's reports for the financial and operational sector of the high-voltage customer area of Enel(formerly Coelce)."
            ]} />

          <div className="experience-card-divisor"></div>

          <ExperienceCard
            title={"Simbiose Ventures Ltda"}
            occupation={"Software Developer"}
            date={"November 2015 - April 2016"}
            text={[
              "Analysis and development of systems using Python, JavaScript, PostgreSQL, MongoDB and AWS."
            ]} />
        </div>

      </div>
    );
  }
}

export default Experience;