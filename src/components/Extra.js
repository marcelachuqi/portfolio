import React from "react";
import yummin from "../image/yumm-in.jpg";
import ohmyworld from "../image/Original.svg";

const Extra = () => {
  return (
    <>
      <h2 className="field">Extra</h2>
      <div className="extra">
        <div className="extra-1">
          <h3 className="extra-title"> </h3>

          <a href={yummin}>
            <img className="yummin" src={yummin} />
          </a>
          <p>UI|UX, naming, design and mockup with Sketch</p>
        </div>
        <div className="extra-2">
          <h3 className="extra-title"> </h3>

          <a href="http://www.oh-myworld.com">
            <img className="ohmyworld" src={ohmyworld} />
          </a>
          <p>Customized Gift Box</p>
        </div>

        <div className="extra-3">
          <h3 className="extra-title"> </h3>

          <a href={yummin}>
            <img className="yummin" src={yummin} />
          </a>
          <p>Naming, design and mockup with Sketch</p>
        </div>
      </div>
    </>
  );
};

export default Extra;