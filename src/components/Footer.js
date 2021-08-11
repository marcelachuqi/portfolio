import React from "react";

const Footer = () => {
  return (
    <>
      <nav>
        <div className="footer__nav__2">
          <ul className="footer__nav__social">
            <li>
              <a className="twitter" target="_blank" href="https://adalab.es/">
                twitter
              </a>
            </li>
            <li>
              <a
                className="instagram"
                target="_blank"
                href="https://adalab.es/"
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copy">
          <span className="footer__copy__year">©2021</span>
          <span className="footer__copy__text">we </span>
          <span className="footer__copy__heart"> ❤︎ </span>
        </div>
      </nav>
    </>
  );
};

export default Footer;
