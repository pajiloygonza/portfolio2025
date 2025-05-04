import React, { useEffect } from "react";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "../../public/img/background.jpg"; // Укажите правильный путь к вашему изображению

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);

  return (
    <section
      id="about"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(115deg, rgba(53,53,53,0.63), rgba(7,7,7,0.582)), url(${background})`,
      }}
    >
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
