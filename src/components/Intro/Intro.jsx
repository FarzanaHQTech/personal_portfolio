
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import myPhoto  from "../../img/girl-8.jpeg";
import myPhoto  from "../../img/profile-pic (3).png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import React, { useContext } from "react";
//transition from framermotion
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import FloatinDiv from "../FlotingDiv/FloatingDiv";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context for darkmode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Navbar">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* change for darkmode */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Farzana Akter</span>
          <span style={{color:darkMode?"white":""}}>
            Frontend Developer and Backend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
       
        <img style={{height:"320px", borderRadius:"20px", right:"-30px", top:"60px", }}src={myPhoto } alt="" />
        {/* <img style={{width:"300px", borderRadius:"40px"}}src={myPhoto} alt="" /> */}
        {/* animation */}
       
        <motion.img 
          initial={{ left: "-36%" }}
          whileInView={{ left: "-20%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "84%" }}
          whileInView={{ left: "67%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={crown} text1="Web" text2="Developer" /> */}
          <FloatinDiv img={crown} text1="Web" text2="Developer"/>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "-0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award"/>
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#aeeffc",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
