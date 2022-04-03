import React from "react";
import "./nav.css";
import {
  CodeSquare,
  Folder,
  House,
  ColumnsGap,
  Envelope,
  Person,
} from "react-bootstrap-icons";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <House />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <ColumnsGap />
      </a>
      <a
        href="#technologies"
        onClick={() => setActiveNav("#technologies")}
        className={activeNav === "#technologies" ? "active" : ""}
      >
        <CodeSquare />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <Folder />
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
