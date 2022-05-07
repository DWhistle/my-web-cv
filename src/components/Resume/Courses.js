import React from "react";
import PropTypes from "prop-types";

import Course from "./Courses/Course";
import { FormattedMessage } from "react-intl";

const getRows = (courses) =>
  courses
    .map((course, idx) => (
      <Course
        data={course}
        key={course.title}
        last={idx === courses.length - 1}
      />
    ));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="resumecourses" />
    <div className="title">
      <h3>
        <FormattedMessage id="ResumeCourses"></FormattedMessage>
      </h3>
    </div>
    <div className="course-list">{getRows(data)}</div>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    })
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
