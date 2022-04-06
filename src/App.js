import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import Testimonies from "./components/testimonies/Testimonies";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Nav />
      <Technologies />
      <Services />
      <Portfolio />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
