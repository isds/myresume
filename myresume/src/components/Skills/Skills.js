import React, { Component } from 'react';
import './Skills.css';
import 'bootstrap/dist/css/bootstrap.css';


class Skills extends Component {
  render() {
    const skills = [
      "HTML5", "CSS3", "JavaScript", "ReactJS", "C", "VBA", "Python", "Git", "MS Access", "Informix",
      "MySql", "PostgreSQL", "MongoDB", "Amazon Redshift", "Amazon RDS", "Aerospike"
    ];
    const skillItems = skills.map(
      (skill, i) => { return <label key={i} className="skill-item">{skill}</label> }
    );

    return (
      <div id="skills" className="row justify-content-center skills-container ">
        <div className="col-10 text-center">
          <span className="row justify-content-center skills-title">
            Skills
          </span>

          <div className="row justify-content-center">
            <div className="col-8 col-sm-8 skills-card text-center">
              {skillItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;