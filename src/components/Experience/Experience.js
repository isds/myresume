import React, { Component } from 'react';
import './Experience.css';

const experienceData = [
  
  {
    title: 'Ceará State Health Secretariat - (SESA)',
    occupation: 'Systems Analyst',
    date: 'Jul 2019 - Now',
    description: [
      'Analysis and development of systems for the health of the state acting in projects of great relevance and impact capacity',
      'API development using .net core (asp.net core), java (springboot)',
      'Development of mobile applications (flutter)',
      'Frontend apps development with Angular 8+',
      'Code Review',
      'Creation of data import automation routines and others integrations (python)',
      'Support to other team members',
      'Maintenance of the CI / CD cycle of our products',
      'Participation in architectural decision-making',
    ]
  },  
  {
    title: 'Freelancer',
    occupation: 'Systems Developer Analyst',
    date: 'Jun 2016 - Jun 2019',
    description: [
      'Acting as a freelance developer in several companies, being part of remote Brazilian and multinational teams, multidisciplinary and high performance, working in the development of backend activities',
      'Development of Restful APIs with python (flask, twister and django rest framework)',
      'Development of Graphql APIs with python (graphql-python)',
      'Web application development with Python (Django)'
    ]
  },
  {
    title: 'Simbiose Ventures Ltda',
    occupation: 'Software Developer',
    date: 'Nov 2015 - Mai 2016',
    description: [
      'Backend software developer working from home',
      'Development of Restful apis with python (flask)',
      'Development of an ETL tool for internal use in the company with python',
      'Analysis and development of systems using Python(Django, SQL, Alchemy, flask), JavaScript, PostgreSQL, MongoDB and AWS'
    ]
  },
  {
    title: 'B&Q Energia Ltda',
    occupation: 'IT Administrative Analyst',
    date: 'Nov 2014 - Nov 2015',
    description: [
      'Development and maintenance of databases for the high-voltage customer sector of Enel(formerly Coelce).',
      'Automation of reports with VBA and Python.',
      'Optimization of SQL queries.',
      "Extraction of Informix's reports for the financial and operational sector of the high-voltage customer area of Enel(formerly Coelce)."
    ]
  },
  {
    title: 'Asyst International + Rhealeza It Services', occupation: 'Support Technician',
    date: 'Sep 2011 - Oct 2014',
    description: [
      'Remote and presencial maintenance of network assets and assistance to the end user about the correct use of the technological company assets.',
      'Scripts development for automating technical solutions.'
    ]
  },
  {
    title: 'CASEBRÁS Group',
    occupation: 'Trainee in the Information Technology sector',
    date: 'Jul 2010 - Nov 2010',
    description: [
      'Remote and presencial maintenance of network assets and assistance to the end user about the correct use of the technological company assets.'
    ]
  },
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

