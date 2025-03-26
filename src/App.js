
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from './components/Testimonial/Testimonial'
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Client from "./components/Client/Client";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Client/>
      <Footer />
    </div>
  );
}

export default App;


// import React, { useContext } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import "./App.css";
// import Intro from "./components/Intro/Intro";
// import Services from "./components/Services/Services";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonial/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Toggle from "./components/Toggle/Toggle";
// import FlotingDiv from "./components/FlotingDiv/FloatingDiv";
// import { themeContext } from "./Context";

// function App() {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   console.log("Dark mode state:", theme.state);
//   return (
//     <div
//       className="App"
//       style={{
//         background: darkMode ? "black" : "white",
//         color: darkMode ? "white" : "black",
//       }}>
//     {/* <div className = "App"> */}
//       <Navbar />
//       <Intro />
//       <Services />
//       <FlotingDiv/>
//       <Experience />
//       <Works />
//       <Portfolio />
//       <Testimonial />
//       <Contact />
//       <Footer />
//       <Toggle />
//     </div>
//   );
// }

// export default App;

