import React from "react";
import SkillBox from "./SkillBox";
import "./Barcontainer.css";
function Barcontainer() {
  return (
    <>
      <div
        className="col-lg-12 bar-container mt-lg-5 "
        style={{ width: "100%", marginLeft: "10%" }}
      >
        <SkillBox title="java" length="70" />
        <SkillBox title="python" length="60" />
        <SkillBox title="javascript" length="60" />
        <SkillBox title="react" length="50" />
        <SkillBox title="django" length="40" />
      </div>
    </>
  );
}

export default Barcontainer;
