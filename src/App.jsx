import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/Section/About";
import Proyect from "./components/Section/Proyect";
import Service from "./components/Section/Service";
import Contact from "./components/Section/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About id="aboutSection"/>
      <Proyect id="proyectSection"/>
      <Service id="serviceSection"/>
      <Contact id="contactSection"/>
      <Footer />
    </div>
  );
}

export default App;