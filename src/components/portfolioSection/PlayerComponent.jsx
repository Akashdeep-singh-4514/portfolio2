import React, { useRef } from "react";
import ReactPlayer from "react-player";
function PlayerComponent({ Recording }) {
  const playerRef = useRef(null);
  return (
    <div>
      <video width="100%" height="60%" controls>
        <source src={Recording} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default PlayerComponent;
