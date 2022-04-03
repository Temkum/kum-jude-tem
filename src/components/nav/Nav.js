import React from "react";
import "./nav.css";
import {
  CodeSquare,
  Folder,
  House,
  Clipboard2Data,
  Envelope,
  Person,
} from "react-bootstrap-icons";

function nav() {
  return (
    <nav>
      <a href="#">
        <House />
      </a>
      <a href="#services">
        <Clipboard2Data />
      </a>
      <a href="#technologies">
        <CodeSquare />
      </a>
      <a href="#portfolio">
        <Folder />
      </a>
      <a href="#contact">
        <Envelope />
      </a>
      <a href="#about">
        <Person />
      </a>
    </nav>
  );
}

export default nav;
