import React from "react";

import image from "../images/design-desk.jpeg";
const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Name Formatter",
    description:
      "A simple web app that takes a name and returns it in a variety of formats. Built with JavaScript, HTML, and CSS.",
    url: "https://github.com/Biehlj/name-formatter",
  },
  {
    title: "Home Lab Terraform",
    description: "Created a Terraform file to deploy resources to my home lab utilizing Terraform",
    url: "https://github.com/Biehlj/terraform-proxmox-k3s",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed. Includes my experience and design abilities.",
    url: "https://resume.biehl.studio",
  },
  {
    title: "My GitHub",
    description: "My GitHub page with all of my projects.",
    url: "https://github.com/Biehlj",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="portfolio-main">
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <div className="flex-content">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={image} alt={imageAltText} className="portfolio-image" />
      </div>
    </section>
  );
};

export default Portfolio;
