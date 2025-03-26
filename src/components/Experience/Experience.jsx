import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}} >years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
      <div>
      <div className="blur2" style={{ background: "rgb(238 210 255)" }}></div>
</div>

    </div>
    
  );
};

export default Experience;

// import React from 'react'
// import './Experience.css'
// const Experience = () => {
//   return (
//     <div className='experience'>
//       <div className="achievement">
//         <div className="circle">1+</div>
//         <span>years</span>
//         <span>Experiences</span>
//       </div>
//       <div className="achievement">
//         <div className="circle">15+</div>
//         <span>completed</span>
//         <span>Projects</span>
//       </div>
//       <div className="achievement">
//         <div className="circle">1</div>
//         <span>company</span>
//         <span>Work</span>
//       </div>
//     </div>
//   )
// }

// export default Experience
