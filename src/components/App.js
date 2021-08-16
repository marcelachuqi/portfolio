import React from "react";
import Boxes from "./Boxes";
import Profile from "./Profile";
import Projects from "./Projects";
import KnowMeBetter from "./KnowMeBetter";
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
      <KnowMeBetter />
      <Footer />
    </body>
  );
};

export default App;
