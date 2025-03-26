import React from "react";
import "./Footer.css";
import { UilInstagram, UilFacebook, UilGithub } from "@iconscout/react-unicons";
import Wave from "../../img/wave.png";
// import Insta from '@iconscout/react-unicons/icons/uil-instagram';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a >farzana17635@gmail.com</a>
        <div className="f-icons">
          <UilInstagram color="white" size="3rem" className="icons" />
          <UilFacebook color="white" size="3rem" className="icons" />
          <UilGithub color="white" size="3rem" className="icons" />
          {/* <UilReact color="white" size="3rem" /> */}
          {/* <Insta color="white" size="3rem" /> */}
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
