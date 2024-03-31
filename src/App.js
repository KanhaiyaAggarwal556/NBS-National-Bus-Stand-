// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navbar } from "flowbite-react";
import React from "react";
import Home from "./Components/Home.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/SideBar/Sidebar.jsx";
import Footer  from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
