import React from "react";
import rickmorty from "../image/rick_morty.png";
import pokemon from "../image/pokemon.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Rick and Morty</h2>
      <p>
        A responsive website/ Filters by 3 categories/ React. Router/ Link/
        Design. Made with: React -JS
      </p>
      <a href="https://marcelachuqi.github.io/Rick-and-Morty/#/">
        <img className="rick-morty" src={rickmorty} />
      </a>
      <h2>Pokemon List</h2>
      <p>A responsive website/ ReactJs/ Design. Made with: React -JS</p>
      <a href="https://marcelachuqi.github.io/pokemon_finder/">
        <img className="pokemon" src={pokemon} />
      </a>
    </div>
  );
};

export default Projects;
