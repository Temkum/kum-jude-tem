import React from "react";
import "./about.css";
import { AwardFill } from "react-bootstrap-icons";
import ME from "../../assets/img/Jude.png";

function About() {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="Tem image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
          </div>

          <p>
            I love building new features, squashing bugs and continuously
            improving quality. I have a knack for teamwork with people from
            different backgrounds and skills. I'm friendly, in love with web
            performance, modular reusable code libraries, and got the zeal to
            join an awesome development team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's chat
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
