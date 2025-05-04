import React, { useEffect } from "react";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);

  return (
    <section id="about" className="hero">
      <h1 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500">
        Hello there! I'm Vlad
      </h1>
      <h2 data-aos="fade-left" data-aos-delay="2000" data-aos-duration="1500">
        I'm a Front End Developer
      </h2>
    </section>
  );
};

export default Hero;
