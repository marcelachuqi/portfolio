import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faComment,
  faGift,
  faHandSpock,
} from "@fortawesome/free-solid-svg-icons";

const Boxes = () => {
  return (
    <nav className="box">
      <a className="box-1" href="#section-project">
        <h2 className="box-title"> frontend developer ︁</h2>
        <FontAwesomeIcon
          className="fa-boxes"
          icon={faTerminal}
          color="whitesmoke"
          size="2x"
        />
      </a>

      <a className="box-2 box-title">
        <h2 className="box-title">My entrepreneurship </h2>
        <FontAwesomeIcon
          className="fa-boxes"
          icon={faGift}
          color="white"
          size="1x"
        />
      </a>
      <a className="box-3 box-title" href="#section-know-me-better">
        <h2 className="box-title">Know me better </h2>{" "}
        <FontAwesomeIcon
          className="fa-boxes"
          icon={faComment}
          color="white"
          size="1x"
        />
      </a>
      <a className="box-4 box-title">
        <h2 className="box-title">Let's get in touch </h2>
        <FontAwesomeIcon
          className="fa-boxes"
          icon={faHandSpock}
          color="white"
          size="1x"
        />
      </a>
    </nav>
  );
};

export default Boxes;
