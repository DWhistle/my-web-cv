import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';
import { FormattedMessage } from 'react-intl';


const Experience = ({ data }) => {
  return(
  <div className="experience">
    <div className="link-to" id="resumeexperience" />
    <div className="title">
      <h3><FormattedMessage id="ResumeExperience"></FormattedMessage></h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company + job.position}
      />
    ))}
  </div>
);
    }

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
