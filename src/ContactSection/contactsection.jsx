import React, { useEffect } from "react";
import "./contactsection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);

  return (
    <section id="contact" className="contact__section">
      <div className="contact__section__header">
        Let's work on something together!
      </div>
      <div className="contact__links">
        <a
          href="https://github.com/pajiloygonza"
          data-aos="flip-left"
          data-aos-duration="400" /* Длительность анимации */
        >
          <i className="bi bi-github"></i> GitHub
        </a>
        <a
          href="mailto:pajiloygonza@gmail.com?subject=Hello&body=I%20saw%20your%20portfolio!"
          target="_blank"
          data-aos="flip-left"
          data-aos-duration="400"
          data-aos-delay="00"
        >
          <i className="bi bi-envelope"></i> Mail
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
