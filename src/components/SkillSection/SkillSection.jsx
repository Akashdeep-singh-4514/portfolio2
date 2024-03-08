import React from "react";
import Barcontainer from "./Barcontainer";

function SkillSection() {
  return (
    <>
      <section id="skills" className="mt-lg-5">
        <h2>Skills</h2>
        <div className="row flex-wrap">
          <div className="col-lg-12 w-100 ">
            <Barcontainer />
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillSection;
