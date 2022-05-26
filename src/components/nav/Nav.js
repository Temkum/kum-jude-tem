import React from "react";
import "./nav.css";
import {
  House,
  Envelope,
  Person,
  SuitHeart,
  Layers,
  Briefcase,
} from "react-bootstrap-icons";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#welcome"
        className={activeNav === "#welcome" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <House />
      </a>
      <a
        href="#technologies"
        onClick={() => setActiveNav("#technologies")}
        className={activeNav === "#technologies" ? "active" : ""}
      >
        <Layers />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <SuitHeart />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <Briefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Envelope />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Person />
      </a>
    </nav>
  );
}

export default Nav;
