import React from "react";
import PropTypes from "prop-types";

const SkillShortcut = ({ data }) => {
  return (
    <li>
      <a
        style={{ textDecodation: "none", borderBottom: 0 }}
        href="#resumeskills"
      >
        {data}
      </a>
    </li>
  );
};

SkillShortcut.propTypes = {
  skill: PropTypes.string,
};

export default SkillShortcut;
