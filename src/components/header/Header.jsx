import React from "react";
import "./header.css";
import heroMan from "../../assets/img/heroMan.png";
import { Github, Linkedin, Whatsapp} from "react-bootstrap-icons";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="landing__text">
          <h1>Fullstack <br />Web Developer</h1>
          <p>
            Helping people turn their ideas<br /> into sites & apps with results. <br />
            Cost effective and professional.
          </p>
         <div className="cta-container">
            <div className="cta-btns">
              <a href="#contact">
              <button className="btn-full btn-lg">Hire me</button>
            </a>
            <a href="#projects">
              <button className="btn-lg">View projects</button>
            </a>
            </div>
            <div className="cta-social-icons">
              <a aria-label="Find Kum on LinkedIn" title="Find Kum on LinkedIn" className="landing-icons icon px-4"
                href="https://www.linkedin.com/in/kum-jude-tem" target="_blank" rel="noopener noreferrer">
                <Linkedin/>
              </a>
              <a title="Find Kum Jude on Twitter" aria-label="Find Kum on Twitter" className="landing-icons icon twitter"
                  href="https://api.whatsapp.com/send?phone=00237675827455" target="_blank" rel="noopener noreferrer">
                  <Whatsapp/>
              </a>
            <a aria-label="See Kum's Code on Github" title="See Kum's Code on Github" className="landing-icons icon px-4"
                href="https://github.com/Temkum" target="_blank" rel="noopener noreferrer">
                <Github/>
             </a>
                     
              
            </div>
          </div>
        </div>
        <div className="landing__img">
          <img src={heroMan} alt="Hero image" />
        </div>
      </div>
    </header>
  );
};

export default header;
