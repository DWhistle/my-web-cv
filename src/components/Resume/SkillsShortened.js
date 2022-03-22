import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SkillShortcut from "./Experience/SkillShortcut";

// import { skills, categories } from '../data/resume/skills';

// function getSkills
const SkillsShortened = (data) => {
  console.log(data);
  return (
    <div className="references">
      <div className="link-to" id="references" />
      <ul className="skills">
        {data.skills
          .filter((s) => s.competency >= 3)
          .sort((s1, s2) => s2.competency - s1.competency)
          .map((s) => (
            <SkillShortcut data={s["title"]} key={s["title"]}></SkillShortcut>
          ))}
      </ul>
    </div>
  );
};

SkillsShortened.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

SkillsShortened.defaultProps = {
  skills: [],
};

export default SkillsShortened;
