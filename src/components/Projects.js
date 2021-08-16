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
import yummin from "../image/yumm-in.jpg";
import yummin2 from "../image/yummin2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faComment } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <div className="section-3" id="section-project">
        <h2 className="field1"> My projects</h2>
        <div className="projects">
          <div>
            <img className="rick-morty" src={rickmorty} />
            <h3 className="project-title"> Rick and Morty </h3>
            <p>A responsive website | Reactjs | Router | npm</p>

            <a href="https://marcelachuqi.github.io/Rick-and-Morty/#/">
              <FontAwesomeIcon className="fa-solid" icon={faLink} />{" "}
            </a>
            <a>
              <FontAwesomeIcon className="fa-solid" icon={faCode} />
            </a>
          </div>
          <div>
            <img className="pokemon" src={pokemon} />
            <h3 className="project-title">Pokemon List</h3>
            <p>A responsive website | ReactJs</p>
            <a href="https://marcelachuqi.github.io/pokemon_finder/">
              <FontAwesomeIcon className="fa-solid" icon={faLink} />
            </a>
            <a>
              <FontAwesomeIcon className="fa-solid" icon={faCode} />
            </a>{" "}
          </div>

          <div>
            <img className="netflix" src={netflix} />
            <h3 className="project-title">TV show hunter</h3>
            <p> JS | HTML | CSS </p>{" "}
            <a href="http://beta.adalab.es/modulo-2-evaluacion-final-marcelachuqi/">
              <FontAwesomeIcon className="fa-solid" icon={faLink} />
            </a>
            <a>
              <FontAwesomeIcon className="fa-solid" icon={faCode} />
            </a>{" "}
          </div>

          <div>
            {" "}
            <img className="anonimus" src={anonimus} />{" "}
            <h3 className="project-title">Web Design</h3>
            <p>
              A responsive website layout | HTML | CSS Animation | Sass | Node |
              Gulp | Partials | BEM
            </p>
            <a href="http://beta.adalab.es/modulo-1-evaluacion-final-marcelachuqi/">
              <FontAwesomeIcon className="fa-solid" icon={faLink} />
            </a>
            <a>
              <FontAwesomeIcon className="fa-solid" icon={faCode} />
            </a>
          </div>

          <div>
            <img className="random" src={random} />
            <h3 className="project-title">Random Number</h3>
            <p>
              A responsive website layout | HTML | CSS Animation | Sass | Node |
              Gulp | Partials | BEM
            </p>
            <a href="https://marcelachuqi.github.io/random_numbers/">
              <FontAwesomeIcon className="fa-solid" icon={faLink} />
            </a>
            <a>
              <FontAwesomeIcon className="fa-solid" icon={faCode} />
            </a>
          </div>
          <div>
            <img className="yummin" src={yummin2} />
            <h3 className="project-title">Yumm-in! App</h3>
            <p>UI|UX | naming | design and mockup with Sketch</p>
            <a href={yummin}>
              <FontAwesomeIcon className="fa-solid" icon={faLink} />
            </a>
          </div>

          <h2 className="field2">Team work</h2>
          <div>
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
          </div>
          <div>
            <img className="heroku" src={heroku} />
            <h3 className="project-title">hAPpI Painters</h3>
            <p>Backend | SQL</p>
            <a href="http://happi-painters.herokuapp.com/#/ "></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
