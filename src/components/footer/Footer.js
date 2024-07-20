import React from 'react';
import { Whatsapp, Twitter, Linkedin, Github } from 'react-bootstrap-icons';
import './footer.css';

function Footer() {
  return (
    <footer>
      <h2 className="mb-2">
        <a href="#" className="footer_logo">
          Kum Jude T. Tem
        </a>
      </h2>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
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
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Connect</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Temkum" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a
          href="https://twitter.com/KumJude?s=09"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/kum-jude-tem"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+237675827455"
          target="_blank"
          rel="noreferrer"
        >
          <Whatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          {new Date().getFullYear() > 2019
            ? `2019 - ${new Date().getFullYear()}`
            : '2019'}{' '}
          &copy; All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
