// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navbar } from "flowbite-react";
import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import Footer  from "./Components/Footer/Footer.jsx";
import Pg1 from "./Components/page1.jsx"
import SlideBar from "./Components/SideBar/SideBar.jsx"
function App() {
  return (
    <>
      <SlideBar/>
      <Navbar />
      <Pg1/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
