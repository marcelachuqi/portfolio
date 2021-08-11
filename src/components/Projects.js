import React from "react";
import rickmorty from "../image/rick_morty.jpeg";
import pokemon from "../image/pokemon.png";
import netflix from "../image/netflix.png";

const Projects = () => {
  return (
    <div>
      <h2 className="field">Frontend Developer</h2>
      <div className="projects">
        <h3 className="project-title">Rick and Morty</h3>
        <p>
          A responsive website/ Filters by 3 categories/ React. Router/ Link/
          Design. Made with: React -JS
        </p>
        <a href="https://marcelachuqi.github.io/Rick-and-Morty/#/">
          <img className="rick-morty" src={rickmorty} />
        </a>
        <h3 className="project-title">Pokemon List</h3>
        <p>A responsive website/ ReactJs/ Design. Made with: React -JS</p>
        <a href="https://marcelachuqi.github.io/pokemon_finder/">
          <img className="pokemon" src={pokemon} />
        </a>
        <h3 className="project-title">TV show hunter</h3>
        <p>Filters/ Favorite/ Select. Made with: JS -HTML -CSS</p>
        <a href="http://beta.adalab.es/modulo-2-evaluacion-final-marcelachuqi/">
          <img className="netflix" src={netflix} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
