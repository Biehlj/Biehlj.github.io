import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Computer Information Systems student studying at Southwestern Illinois College. I enjoy utilizing the skills I've learned to create products for myself and others.";

const skillsList = [
  "Cybersecurity",
  "Application development",
  "DevSecOps practices",
  "Web design",
];

const detailOrQuote = "The best way to predict the future is to create it. - Abraham Lincoln";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="about">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
