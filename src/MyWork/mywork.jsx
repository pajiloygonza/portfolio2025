import React, { useEffect } from "react";
import "./mywork.css";
import projects from "../data/data.json";
import AOS from "aos";
import "aos/dist/aos.css";

const MyWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <section id="projects" className="mywork">
        <h2
          className="mywork__h2"
          data-aos="zoom-in"
        >
          These are some of my projects, check them out!
        </h2>
        <section className="projects_title">
          {projects.map((project, index) => (
            <div
              className="card"
              key={index}
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                  ? "fade-down"
                  : index === 2
                  ? "fade-left"
                  : index === 3
                  ? "fade-right"
                  : index === 4
                  ? "fade-down"
                  : index === 5
                  ? "fade-left"
                  : index === 6
                  ? "fade-up"
                  : null
              }
            >
              <div className="card__inner">
                <div className="front">
                  <div className="img__card">
                    <img
                      src={project.img}
                      alt={project.title}
                      className={index === 2 ? "offset-left" : ""}
                    />
                  </div>
                </div>
                <div className="back">
                  <p className="stack">{project.stack}</p>
                  <p className="stack2">{project.stack2}</p>
                </div>
              </div>
              <a href={project.link}>
                <button className="button__mywork">
                  <p>{project.title}</p>
                </button>
              </a>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default MyWork;
