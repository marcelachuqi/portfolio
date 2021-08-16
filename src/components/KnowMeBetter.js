import React from "react";
import marcelafoto from "../image/marcelafoto.png";
import cv from "../image/CV.jpg";
import Education from "./Education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const KnowMeBetter = () => {
  return (
    <>
      <Education />
      <h2 className="resume">
        "If there is something that describes me, it is the
        <i> adrenaline </i> to start something new, the
        <i> commitment </i> to continue it and the
        <i> resilience </i> to continue despite unfavorable situations. With
        experience in the management of human capital in multinational
        companies, redirected to Front-end development, interface design and
        user experience, restless and in the constant search for new ideas,
        business orientation, with strategic, creative thinking, resilient and
        committed"
      </h2>

      {/* <h2 className="field3">More</h2> */}
      <div className="extra">
        {/* <div className="extra-1">
          <h3 className="extra-title"> </h3>
        </div>
        <div className="extra-2">
          <h3 className="extra-title"> </h3>

          <a href="http://www.oh-myworld.com">
            <img className="ohmyworld" src={ohmyworld} />
          </a>
          <p>Customized Gift Box</p>
        </div> */}

        <div className="extra-1">
          <h3 className="extra-title"> </h3>
          <img className="marcelafoto" src={marcelafoto} />

          <p>Download my resume </p>
          <a href={cv}>
            <FontAwesomeIcon icon={faDownload} color="whitesmoke" size="1x" />
          </a>
        </div>
        <div className="extra-2">
          <h3 className="extra-title">Soft skills </h3>

          <p className="soft-skills1">Problem Solving</p>
          <p className="soft-skills2">Creativity</p>
          <p className="soft-skills3">Estrategic thinking</p>
          <p className="soft-skills4">Customer orientation</p>
          <p className="soft-skills5">Teamwork</p>
          <p className="soft-skills6">Communication skills</p>
        </div>
      </div>
    </>
  );
};

export default KnowMeBetter;
