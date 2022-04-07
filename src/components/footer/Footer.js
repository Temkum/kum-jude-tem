import React from "react";
import { Whatsapp, Twitter, Linkedin, Github } from "react-bootstrap-icons";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kum Jude Tem
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Connect</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Temkum" target="_blank">
          <Github />
        </a>
        <a href="https://twitter.com/KumJude?s=09" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/kum-jude-tem" target="_blank">
          <Linkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+237675827455"
          target="_blank"
        >
          <Whatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>2022 &copy; All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
