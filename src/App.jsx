import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";

const siteProps = {
  name: "John Biehl",
  title: "Cybersecurity Engineer, Developer, and Lifelong Student",
  email: "johnbiehl@gmail.com",
  gitHub: "Biehlj",
  instagram: "johnpbiehl",
  linkedIn: "johnbiehl",
  medium: "",
  twitter: "biehl_john",
  youTube: "JohnBiehl47",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
