import React from "react";

function HomeSection() {
  return (
    <section id="home">
      <div
        className=""
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="" style={{ height: "500px" }}>
          <h1
            className=" text-light text-capitalize text-lg-center   "
            style={{ paddingTop: "160px" }}
          >
            Akashdeep singh
          </h1>
          <h4 className="text-light font-monospace text-decoration-underline ">
            portfolio
          </h4>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
