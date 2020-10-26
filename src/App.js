import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Info />
      <Skills />
      <Qualification title="experience" />
      <Qualification title="education" />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
