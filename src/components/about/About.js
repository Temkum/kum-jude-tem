import React from "react";
import "./about.css";
import { AwardFill } from "react-bootstrap-icons";
import ME from "../../assets/img/Jude.png";

function About() {
  return (
    <section id="about">
      <h5>Get to Know Me</h5>
      <h1>About me</h1>

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
              <small>3+ years</small>
            </article>
          </div>

          <p>
            I was born and raised in Buea, Cameroon. I'm a freelance
            captioner/translator turned developer. I have always had a passion
            for tech and everything web development. <br /> <br />I love
            building new features, squashing bugs and continuously improving
            quality. I'm friendly, in love with web performance, modular
            reusable code libraries, and got the zeal to join an awesome
            development team.
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
