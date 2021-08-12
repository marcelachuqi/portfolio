import React from "react";
import Boxes from "./Boxes";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import Extra from "./Extra";
import Footer from "./Footer";
import "../stylesheets/style.css";
import "../stylesheets/boxes.css";

const App = () => {
  return (
    <body className="landing">
      <nav className="menu-icon" id="section-1">
        <a href=""></a>
      </nav>{" "}
      <Profile />
      <Boxes />
      <Projects />
      <Education />
      <Extra />
      <Footer />
    </body>
  );
};

export default App;
