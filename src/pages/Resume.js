import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import { skills, categories } from '../data/resume/skills';
import { FormattedMessage } from 'react-intl';
import { AppStateContext } from '../components/Utils/LangWrapper';

const sections = [
  'ResumeEducation',
  'ResumeExperience',
  'ResumeSkills',
  'ResumeCourses',
  'ResumeReferences',
];

const Resume = () => {
  const context = useContext(AppStateContext)

  return (
    <Main
      title="Resume"
    >
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="resume"><FormattedMessage id="ResumeRoute"></FormattedMessage></Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}><FormattedMessage id={sec}></FormattedMessage></a>
                </h4>))}
            </div>
  
          </div>
        </header>
        <Experience data={require(`lang/${context.locale}/resume/positions`).default} />
        <Education data={require(`lang/${context.locale}/resume/degrees`).default} />
        <Skills skills={skills} categories={categories} />
        <References />
  
      </article>
    </Main>
  );

  
}

export default Resume;
