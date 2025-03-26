
// export default FlotingDiv
import React from "react";

import './FloatingDiv.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'


const FloatinDiv = ({img, text1, text2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    // darkMode
    <div className="floatingDiv" style={{color:darkMode?"white":""}} >
      {/* <div style={{marginLeft:"20rem",color:"var(--orange)",fontSize:"3rem"}}>Experience</div> */}
      <img src={img} alt="" />
      <span >
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
