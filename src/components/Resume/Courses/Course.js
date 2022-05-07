import React from "react";
import PropTypes from "prop-types";

const Course = ({ data, last }) => (
  <li className="course-container">
    <p className="course-university">{data.university}</p> &#8212; <span/>
    <a href={data.link}>
    <p className="course-name">{data.title}</p>
    </a>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
