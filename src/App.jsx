/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MusicVideo from "./pages/MusicVideo";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music-video" element={<MusicVideo />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MusicPlayer />
      </>
    </Router>
  );
}

export default App;
