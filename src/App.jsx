
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Research from "./Research";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./App.css";

function App() {
  const basename =
    window.location.hostname === "srine16.github.io"
      ? "/sunjida-rine"
      : "";

  return (
    <Router basename={basename}>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
