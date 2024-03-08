import React from "react";
import Contact from "./Contact";
import Linkedin from "./Linkedin.png";
import Email from "./Email.png";
import Github from "./Github.png";
import Instagram from "./Instagram.png";
import Whatsapp from "./Whatsapp.png";

function ContactSection() {
  return (
    <>
      <section id="contact">
        <h2>Contact</h2>
        <div className=" row flex-wrap">
          <Contact
            title="linkedIn"
            app={Linkedin}
            link="https://www.linkedin.com/in/akashdeep-singh-409583264/"
          />
          <Contact
            title="Instagram"
            app={Instagram}
            link="https://www.instagram.com/sky.__.39/"
          />
          <Contact
            title="Email"
            app={Email}
            link="mailto:waliaakash95@gmail.com"
          />
          <Contact
            title="Github"
            app={Github}
            link="https://github.com/Akashdeep-singh-4514"
          />
          <Contact
            title="whatsapp"
            app={Whatsapp}
            link="https://api.whatsapp.com/send?phone=919417825864"
          />
        </div>
      </section>
    </>
  );
}

export default ContactSection;
