import React from "react";
import "./SkillBox.css";
function SkillBox({ title, length }) {
  return (
    <>
      <div class="skill-box text-start">
        <span class="title text-capitalize ">{title}</span>

        <div class="skill-bar">
          <div class="skill-per java" style={{ width: ` ${length}%` }}></div>
        </div>
      </div>
    </>
  );
}

export default SkillBox;
