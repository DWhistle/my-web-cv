import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';
import { FormattedMessage } from 'react-intl';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="resumeeducation" />
    <div className="title">
      <h3><FormattedMessage id="ResumeEducation"></FormattedMessage></h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
