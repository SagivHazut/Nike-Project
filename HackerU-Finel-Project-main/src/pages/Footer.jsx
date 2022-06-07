import React, { Fragment } from "react";
import facebook from "../../src/assets/facebook.png";
import instagram from "../../src/assets/instagram.png";
import twitter from "../../src/assets/twitter.png";

import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="logos">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="..." />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
        <h1>Nike</h1>
        <p>
          © 2022 Copyright: Sagiv Hazut <br />{" "}
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
