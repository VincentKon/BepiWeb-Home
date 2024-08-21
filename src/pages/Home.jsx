// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="hero">
        <div className="heroContainer">
          <h1>BEPI</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, enim facilis quidem doloribus ratione magni ducimus error dolores fugit, minima ad delectus iusto cupiditate esse quas quia perspiciatis ipsa adipisci!</p>
          <div className="btnContainer">
            <Link to="/career" className="button">Career</Link>
            <Link to="/music-video" className="button">Music</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
