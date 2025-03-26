

import React, { useContext } from "react";
import "./Toggle.css";
import { UilSun } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);

  // Dispatch the toggle action
  const handleToggle = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleToggle}>
      <UilSun />
      <UilMoon />
      {/* Dynamically position the button based on darkMode */}
      <div
        className="t-button"
        style={{
          left: theme.state.darkMode ? "2px" : "25px", // Adjust positions as needed
        }}
      ></div>
    </div>
  );
};

export default Toggle;


// import React, { useContext } from "react";
// import "./Toggle.css";
// import { UilSun } from "@iconscout/react-unicons";
// import { UilMoon } from "@iconscout/react-unicons";
// import { themeContext } from "../../Context";

// const Toggle = () => {
//   const theme = useContext(themeContext);

//   // Dispatch the toggle action
//   const handleToggle = () => {
//     theme.dispatch({ type: "toggle" });
//   };

//   return (
//     <div className="toggle" onClick={handleToggle}>
//       {/* Adding default size and color as props */}
//       <UilSun size={24} color="yellow" />
//       <UilMoon size={24} color="blue" />
//       {/* Dynamically position the button based on darkMode */}
//       <div
//         className="t-button"
//         style={{
//           left: theme.state.darkMode ? "2px" : "25px", // Adjust positions as needed
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Toggle;
