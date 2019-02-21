import React, { Component } from 'react';
import './Skills.css';


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
      <div id="skills" className="skills-container ">
        <div >
          <span className="skills-title">
            Skills
          </span>

          <div>
            <div className="skills-card">
              {skillItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;