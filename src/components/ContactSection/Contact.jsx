import React from "react";

function Contact({ title, app, link }) {
  return (
    <div
      className="mt-lg-5 card shadow-sm p-2 mx-1 col-lg-2  "
      style={{ width: "30%" }}
    >
      <a
        href={link}
        target="_blank"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h5 className="text-capitalize">{title}</h5>
        <img src={app} alt={`${title} photo`} height="70%" width="50%" />
      </a>
    </div>
  );
}

export default Contact;
