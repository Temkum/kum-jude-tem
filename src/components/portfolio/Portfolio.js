import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio/ecommerce.PNG";
import IMG1 from "../../assets/portfolio/pos.PNG";
import IMG2 from "../../assets/portfolio/blog.png";
import IMG3 from "../../assets/portfolio/restau.png";

const data = [
  {
    id: 1,
    image: IMG,
    title: "eCommerce website",
    description:
      "This website is a business which can process orders, accept payments, manage shipping and provide customer service",
    tech: ["html5/css3", "laravel", "javascript", "bootstrap", "php", "MYSQL"],
    git: "https://github.com/Temkum/laravel-ecommerce",
    details: "#!",
  },
  {
    id: 2,
    image: IMG1,
    title: "Point of Sale",
    description:
      "Enables you to manage inventory, sales, purchases, customers, invoices, receiving payments, and more.",
    tech: ["html/css", "laravel", "javascript", "bootstrap", "php"],
    git: "https://github.com/Temkum/php_pos",
    details: "#!",
  },
  {
    id: 3,
    image: IMG2,
    title: "Blog",
    description: "Web page displaying information or personal journal.",
    tech: ["html5/css3", "jquery", "javascript"],
    git: "https://github.com",
    demo: "https://bloggerr.netlify.app",
  },
  {
    id: 4,
    image: IMG3,
    title: "Restaurant website",
    description: "Beautiful design for your restaurant business.",
    tech: ["html5/css3", "Bootstrap", "javascript"],
    git: "https://github.com",
    demo: "https://restau1.netlify.app",
  },
];

const projectItem = data.map(
  ({ id, image, title, description, tech, git, demo }) => {
    return (
      <article className="project-card" key={id}>
        <div className="card">
          <div className="card-header">
            <a href="#!">
              <img src={image} alt="Portfolio-img" />
            </a>
          </div>
          <div className="card-body">
            <div className="techs">
              {tech.map((tech) => {
                return (
                  <span className="tag" key={tech.toString()}>
                    {tech}
                  </span>
                );
              })}
            </div>
            <h4>{title}</h4>
            <p>{description} </p>
            <div className="project-links">
              <a href={demo} target="_blank" rel="noreferrer" className="btn">
                {demo ? "Demo" : "Details"}
              </a>
              <a
                href={git}
                className="btn-primary btn"
                target="_blank"
                rel="noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }
);

function Portfolio() {
  return (
    <section id="projects">
      <h6>Recent work</h6>
      <h1 className="center-item mb-3">Projects</h1>
      <div className="container projects-container">
        <div className="btn-nav">
          <button className="btn">Websites</button>
          <button className="btn">Web Apps</button>
        </div>
        <div className="project-cards">{projectItem}</div>
      </div>
    </section>
  );
}

export default Portfolio;
