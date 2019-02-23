import React, { Component } from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'CASEBRÁS Group',
    occupation: 'Trainee in the Information Technology sector',
    date: 'July 2010 - November 2010',
    description: [
      'Remote and presencial maintenance of network assets and assistance to the end user about the correct use of the technological company assets.'
    ]
  },
  {
    title: 'Asyst International + Rhealeza It Services', occupation: 'Support Technician',
    date: 'September 2011 - October 2014',
    description: [
      'Remote and presencial maintenance of network assets and assistance to the end user about the correct use of the technological company assets.',
      'Scripts development for automating technical solutions.'
    ]
  },
  {
    title: 'B&Q Energia Ltda',
    occupation: 'IT Administrative Analyst',
    date: 'November 2014 - November 2015',
    description: [
      'Development and maintenance of databases for the high-voltage customer sector of Enel(formerly Coelce).',
      'Automation of reports with VBA and Python.',
      'Optimization of SQL queries.',
      "Extraction of Informix's reports for the financial and operational sector of the high-voltage customer area of Enel(formerly Coelce)."
    ]
  },
  {
    title: 'Simbiose Ventures Ltda',
    occupation: 'Software Developer',
    date: 'November 2015 - April 2016',
    description: [
      "Analysis and development of systems using Python, JavaScript, PostgreSQL, MongoDB and AWS."
    ]
  }
];

const ExperienceCard = (props) => {
  const textLines = props.text.map(
    (line, i) => <li key={i} className="experience-card-text">{line}</li>
  );
  return (
    <div className="experience-card">
      <p className="experience-card-title">
        {props.title} <span>{props.date}</span>
      </p>
      <p className="experience-card-occupation">{props.occupation}</p>
      <ul>
        {textLines}
      </ul>
    </div>
  );
}

const cards = experienceData.map(
  (item, i) => (
    <ExperienceCard
      key={i}
      title={item.title}
      occupation={item.occupation}
      date={item.date}
      text={item.description} />
  )
);

class Experience extends Component {
  render() {
    return (
      <div id="experience" className="experience-container">
        <div className="experience-title">
          Experience
        </div>

        {cards}
      </div>
    );
  }
}

export default Experience;

