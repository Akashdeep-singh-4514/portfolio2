import React, { useState } from "react";
import PlayerComponent from "./PlayerComponent";

function ProjectComponent({ title, children, genre, Recording, github }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`col-lg-5 card mt-3 shadow-g mx-4  ${
        hover ? "bg-info-subtle shadow-lg " : ""
      } `}
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
    >
      <div className="p-4 text-center ">
        <h3 className="text-capitalize ">{title}</h3>
        <h5 className="font-monospace ">{genre}</h5>
        <PlayerComponent Recording={Recording} />
        <p className="text-start">{children}</p>
        <a
          href={github}
          target="blank"
          style={{ textDecoration: "none", color: "blue" }}
        >
          githublink
        </a>
      </div>
    </div>
  );
}

export default ProjectComponent;
