import React from "react";
import logo from "../image/MARCELA YAMUR (1).png";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import "../stylesheets/style.css";

const App = () => {
  return (
    <body className="landing">
      <div>
        <img className="logo-my" src={logo} />{" "}
      </div>
      <Profile />
      <Education />
      <Projects />
    </body>
  );
};

export default App;
