import React, { useEffect } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);

  return (
    <header
      className="header"
      data-aos="fade-down" /* Анимация выпадения сверху */
      data-aos-duration="550" /* Длительность анимации */
      data-aos-easing="ease-in-out" /* Плавность анимации */
    >
      <nav className="header__nav">
        <ul className="header__ul">
          <li>
            <a className="header__a" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header__a" href="#projects">
              My Work
            </a>
          </li>
          <li>
            <a className="header__a" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
