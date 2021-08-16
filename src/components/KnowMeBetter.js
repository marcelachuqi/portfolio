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
        <div>
          <div className="extra-1"></div>
        </div>

        <div className="extra-2">
          <div>
            <span className="soft-skills1">Problem Solving</span>
            <span className="soft-skills2">Creativity</span>
            <span className="soft-skills3">Estrategic thinking</span>
            <span className="soft-skills4">Customer orientation</span>
            <span className="soft-skills5">Teamwork</span>
            <span className="soft-skills6">Communication skills</span>
          </div>
        </div>
        <h3 className="extra-title-1">Download my resume </h3>
        <a href={cv}>
          <FontAwesomeIcon
            icon={faDownload}
            color="rgb(48, 132, 138)"
            size="1x"
          />
        </a>
      </div>
    </>
  );
};

export default KnowMeBetter;
