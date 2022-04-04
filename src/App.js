import React from "react";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import Testimonies from "./components/testimonies/Testimonies";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Landing />
      <Nav />
      <Services />
      <Portfolio />
      <Technologies />
      <Testimonies />
      <Footer />
    </>
  );
}

export default App;
