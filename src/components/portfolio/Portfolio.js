import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio/p2.png";
import IMG1 from "../../assets/portfolio/p4.png";
import IMG2 from "../../assets/portfolio/p6.png";

const data = [
  {
    id: 1,
    image: IMG,
    title: "eCommerce website app",
    description:
      "Assertively visualize premier niches via covalent communities. Efficiently embrace cross-platform services whereas plug-and-play relationships. Appropriately actualize efficient platforms with orthogonal.",
    tech: ["html/css", "laravel", "javascript", "bootstrap", "php"],
    git: "https://github.com",
    demo: "https:softech.netlify.app",
  },
  {
    id: 2,
    image: IMG1,
    title: "Personal portfolio website",
    description:
      "Credibly impact strategic customer service without reliable bandwidth. Dramatically impact standards compliant strategic.",
    tech: ["html/css", "react", "javascript"],
    git: "https://github.com",
    demo: "https:softech.netlify.app",
  },
  {
    id: 3,
    image: IMG2,
    title: "Point of Sale",
    description:
      "Credibly fabricate stand-alone information rather than high standards in bandwidth. Rapidiously evisculate inexpensive ROI vis-a-vis turnkey content. Progressively.",
    tech: ["html/css", "laravel", "javascript", "bootstrap", "php"],
    git: "https://github.com",
    demo: "https:softech.netlify.app",
  },
];

const projectItem = data.map(
  ({ id, image, title, description, tech, git, demo }) => {
    return (
      <div className="project-card" key={id}>
        <div className="card">
          <div className="card-header">
            <a href="">
              <img src={image} alt="Portfolio Image" />
            </a>
          </div>
          <div className="card-body">
            <div className="techs">
              {tech.map((tech) => {
                return <span className="tag">{tech}</span>;
              })}
            </div>
            <h3>{title}</h3>
            <p>{description} </p>
            <div className="project-links">
              <a href={demo} target="_blank" className="btn">
                Demo
              </a>
              <a href={git} className="btn-primary btn" target="_blank">
                View code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

function Portfolio() {
  return (
    <section id="projects">
      <h5>Recent Work</h5>
      <h1>Projects</h1>
      <div className="btn-nav">
        <button className="btn">Websites</button>
        <button className="btn">Web Apps</button>
      </div>

      <div className="project-cards">{projectItem}</div>
    </section>
  );
}

export default Portfolio;
