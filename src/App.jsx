/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "John Biehl",
  title: "Cybersecurity Engineer, Developer, and Lifelong Student",
  email: "johnbiehl@gmail.com",
  gitHub: "https://github.com/Biehlj",
  instagram: "https://www.instagram.com/johnpbiehl/",
  linkedIn: "https://www.linkedin.com/in/johnbiehl/",
  medium: "",
  twitter: "https://twitter.com/biehl_john",
  youTube: "https://www.youtube.com/c/JohnBiehl47",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
