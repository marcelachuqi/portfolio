import React from "react";
import rickmorty from "../image/rick_morty.png";
import pokemon from "../image/pokemon.png";
import netflix from "../image/netflix.png";
import anonimus from "../image/anonimus.jpeg";
import random from "../image/random.png";
import heroku from "../image/heroku.png";
import etiqueta1 from "../image/etiqueta1.png";
import nombrelogo from "../image/nombre-logo.png";
import etiqueta2 from "../image/etiqueta2.png";
import logosimple from "../image/logosimple2.png";

const Projects = () => {
  return (
    <>
      <div className="section-3">
        <h2 className="field1"> My projects</h2>
        <div className="projects">
          <a href="https://marcelachuqi.github.io/Rick-and-Morty/#/">
            <img className="rick-morty" src={rickmorty} />
          </a>
          <h3 className="project-title">Rick and Morty</h3>
          <p>
            A responsive website/ Filters by 3 categories/ React. Router/ Link/
            Design. Made with: React -JS
          </p>

          <a href="https://marcelachuqi.github.io/pokemon_finder/">
            <img className="pokemon" src={pokemon} />
          </a>
          <h3 className="project-title">Pokemon List</h3>
          <p>A responsive website/ ReactJs/ Design. Made with: React -JS</p>

          <a href="http://beta.adalab.es/modulo-2-evaluacion-final-marcelachuqi/">
            <img className="netflix" src={netflix} />
          </a>
          <h3 className="project-title">TV show hunter</h3>
          <p>Filters/ Favorite/ Select. Made with: JS -HTML -CSS</p>

          <a href="http://beta.adalab.es/modulo-1-evaluacion-final-marcelachuqi/">
            <img className="anonimus" src={anonimus} />
          </a>
          <h3 className="project-title">Web Design</h3>
          <p>
            A responsive website layout. HTML -CSS -Sass -Node -Animation -Gulp/
            Partials / BEM{" "}
          </p>
          <a href="https://marcelachuqi.github.io/random_numbers/">
            <img className="random" src={random} />
          </a>
          <h3 className="project-title">Random Number</h3>
          <p>
            A responsive website layout. HTML -CSS -Sass -Node -Animation -Gulp/
            Partials / BEM
          </p>
        </div>
        <h2 className="field2">Team work</h2>
        <div className="workteam">
          <a href=" http://beta.adalab.es/project-promo-m-module-1-team-3/">
            <section className="image">
              <div className="back">
                <div className="animation">
                  <div>
                    <img
                      className="etiqueta1"
                      src={etiqueta1}
                      alt="etiqueta1"
                      title="etiqueta1"
                    />
                  </div>
                  <div>
                    <img
                      className="nombre-logo"
                      src={nombrelogo}
                      alt="Logo eleven code"
                      title="Logo Completo"
                    />
                  </div>
                  <div>
                    <img
                      className="etiqueta2"
                      src={etiqueta2}
                      alt="etiqueta2"
                      title="etiqueta2"
                    />
                  </div>
                  <div>
                    <img
                      className="logosimple"
                      src={logosimple}
                      alt="Logo simple"
                      title="Logo simple"
                    />
                  </div>
                </div>
              </div>
            </section>
          </a>
          <h3 className="project-title">Eleven Code</h3>
          <p> Gulp | Animation Css| Partials </p>

          <a href="http://happi-painters.herokuapp.com/#/ ">
            <img className="heroku" src={heroku} />
          </a>
          <h3 className="project-title">hAPpI Painters</h3>
          <p>Backend | SQL</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
