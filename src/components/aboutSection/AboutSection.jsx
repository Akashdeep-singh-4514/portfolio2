import React from "react";
import Profilephoto from "../../assets/Profilephoto.png";

function AboutSection() {
  return (
    <section id="about" className="my-3">
      <div className="container my-4 fs-5 ">
        <div className="p-5">
          <h3>
            <b className="text-capitalize " style={{ fontSize: "xx-large" }}>
              Software Developer
            </b>
          </h3>
          <p className="text-capitalize " style={{ fontSize: "large" }}>
            information about me and my life.
          </p>
          <div className="row">
            <div className="col-lg-4">
              <div className="card" style={{ height: "329px", width: "203px" }}>
                <img
                  src={Profilephoto}
                  alt="my photo"
                  style={{ height: " 329px", width: "203px" }}
                />
              </div>
            </div>
            <div className="col-lg-4 text-start ">
              <div className="my-lg-5 align-content-start ">
                <p>
                  <b>Name: </b> Akashdeep Singh
                </p>
                <p>
                  <b>Birth date: </b>1 August,2003
                </p>
                <p>
                  <b>City: </b> Kharar,punjab
                </p>
                <p>
                  <b>Country: </b> India
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-lg-5 text-start">
              <p>
                <b>Age: </b> 20 years (as per 2024)
              </p>
              <p>
                <b>Degree: </b>Bachelor of Technology(3rd year)
              </p>
              <p>
                <b>Website: </b>
                <a
                  className="text-decoration-none "
                  href="https://www.linkedin.com/in/akashdeep-singh-409583264/"
                  target="_blank"
                >
                  My LinkedIn
                </a>
              </p>
              <p>
                <b>Freelance: </b> Available
              </p>
            </div>
            <div className="col-lg-12 p-4 fs-5 ">
              I was born in a small village in SAS nagar,mohali and lived there
              for 11 years and then we shifted to kharar that's a small city in
              mohali district of punjab. I was raised by a single mother. I am a
              philomath person who loves to explore and learn new stuff.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
