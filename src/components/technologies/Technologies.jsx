import React from "react";
import "./technologies.css";
import {
  FiletypeHtml,
  FiletypeCss,
  FiletypeJsx,
  FiletypeJs,
  Bootstrap,
  FiletypePhp,
  BookmarkCheck,
} from "react-bootstrap-icons";

function Technologies() {
  return (
    <section id="technologies">
      <h6>My skills</h6>
      <h1>Technologies</h1>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend</h3>
          <div className="exp__content">
            <article className="exp__details">
              <FiletypeHtml className="exp__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <FiletypeCss className="exp__icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <Bootstrap className="exp__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <FiletypeJsx className="exp__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FiletypeJs className="exp__icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend</h3>
          <div className="exp__content">
            <article className="exp__details">
              <FiletypeJs className="exp__icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="exp__details">
              <FiletypePhp className="exp__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <FiletypePhp className="exp__icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BookmarkCheck className="exp__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BookmarkCheck className="exp__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
