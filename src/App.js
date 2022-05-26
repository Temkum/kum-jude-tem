import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Techs from "./components/technologies/Techs";
import Testimonies from "./components/testimonies/Testimonies";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Techs />
      <Services />
      <Portfolio />
      <Testimonies />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default App;
