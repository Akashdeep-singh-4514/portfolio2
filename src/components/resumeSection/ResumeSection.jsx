import React from "react";
import Schooling from "./Schooling";
import Languages from "./Languages";
import Strengths from "./Strengths";
import WorkExperience from "./WorkExperience";
function ResumeSection() {
  return (
    <section id="resume">
      <h2 className="text-capitalize ">resume</h2>
      <br />
      <div className=" row mx-5 flex-container  flex-wrap justify-content-between ">
        <div className="col-lg-3   m-1 pt-3">
          <span className="bg-primary text-light px-5 py-2 mt-3  fw-medium ">
            SCHOOLING
          </span>
          <Schooling
            schoolName="Henderson jubilee sr sec school"
            year="...-2021"
            caption="I have completed my secondary and higher secondary at Henderson
            Jubilee Senior Secondary School Kharar in year 2021"
            scores={`10th-74.4% ${"  , "}12th-74.8%`}
          />
          <Schooling
            schoolName="rayat bahra university, mohali"
            year="2021-2025"
            caption="Currently I'm pursuing my B.Tech In Rayat Bahra University in computer science 3rd
              year"
            scores=" SGPA-7.4 , CGPA-7.2"
          />
        </div>
        <div className="col-lg-3   m-1 ">
          <Languages />
        </div>
        <div className="col-lg-3   m-1 ">
          <Strengths />
        </div>
        <div className="col-lg-3   m-1 mt-4 ">
          <WorkExperience />
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
