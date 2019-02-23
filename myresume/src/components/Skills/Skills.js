import React, { Component } from 'react';
import './Skills.css';

const skills = [
  "HTML5", "CSS3", "JavaScript", "ReactJS", "C", "VBA", "Python", "Git", "MS Access", "Informix",
  "MySql", "PostgreSQL", "MongoDB", "Amazon Redshift", "Amazon RDS", "Aerospike"
];

class Skills extends Component {
  render() {
    const skillItems = skills.map(
      (skill, i) => { return <label key={i} className="skill-item">{skill}</label> }
    );

    return (
      <div id="skills" className="skills-container">
        <div className="skills-title">
          <span >
            Skills
          </span>
        </div>
        <div className="skills-card">
          {skillItems}
        </div>
      </div>
    );
  }
}

export default Skills;