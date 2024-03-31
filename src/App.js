import React from "react";
// import Home from "./Components/Home.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";

import Footer  from "./Components/Footer/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx"

// import Contact from "./Components/SideBar/Contact.jsx";
// import HTU from "./Components/HowToUse.jsx";
import Booking from "./Components/BookATicket.jsx"
function App() {
  return (
    <>
      <Sidebar/>
      <Navbar />
      {/* <Home /> */}
      {/* <Contact/> */}
      {/* <HTU /> */}
      <Booking/>
      <Footer/>
    </>
  );
}

export default App;
