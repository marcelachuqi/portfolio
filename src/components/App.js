import React from "react";
import logo from "../image/MARCELA YAMUR (1).png";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import Extra from "./Extra";
import Footer from "./Footer";

import "../stylesheets/style.css";

const App = () => {
  return (
    <body className="landing">
      <nav className="menu-icon" id="section-1">
        <a href=""></a>
      </nav>

      <div>
        <img className="logo-my" src={logo} />{" "}
      </div>
      <Profile />
      <Education />
      <Projects />
      <Extra />
      <Footer />
    </body>
  );
};

export default App;
