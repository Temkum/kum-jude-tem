import React from 'react';
import './about.css';
import { AwardFill } from 'react-bootstrap-icons';
import ME from '../../assets/img/Jude.png';

function About() {
  return (
    <section id="about">
      <h6>Get to know me</h6>
      <h1>About me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="Tem" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years</small>
            </article>
          </div>

          <p>
            I have always had a passion for tech and everything web development.{' '}
            <br /> <br />I love building new features, squashing bugs and
            continuously improving quality. I'm friendly, in love with web
            performance, modular reusable code libraries, and got the zeal to
            join an awesome development team.
            <br /> <br />
            As a driven software developer, I have a knack of bringing ideas to
            life through technology. I take projects from initial concept to
            fully realized product, ensuring goals are met and expectations
            exceeded.
            <br /> <br />
            My mission is addressing client needs by building high-performing,
            user-focused digital experiences. Whether designing elegant websites
            or complex platforms, I apply my full-stack expertise to craft
            solutions that function flawlessly while delivering engaging
            experiences.
            <br /> <br />
            What sets me apart is seeing the big picture while caring for small
            details. Throughout each project, I wear many hats - understanding
            requirements, designing interfaces, coding robust architectures,
            integrating visual elements, and setting up systems for smooth
            operations.
            <br /> <br />
            For every client, large or small, I focus on innovative yet
            practical solutions creatively solving even complex problems. My
            goal is making a positive impact through well-crafted software that
            clients truly love using. Committed to excellence, I bring passion,
            versatility and meticulous care to every project from vision to
            launch.
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
