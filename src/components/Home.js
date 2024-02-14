// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the common stylesheet

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Voting App</h1>

      {/* Logos and instructions */}
      <div className="logos-container">
        <div className="logo-container">
          <img
            src="https://www.pngmart.com/files/22/In-N-Out-Burger-Logo-PNG-HD.png"
            alt="In-N-Out Logo"
          />
        </div>
        <h1 className="vs-text">VS</h1>
        <div className="logo-container">
          <img
            src="https://logouniverse.net/wp-content/uploads/2023/05/Whataburger-logo-png.png"
            alt="Whataburger Logo"
          />
        </div>
      </div>

      {/* Vote invitation */}
      <div className="vote-invitation">
        <p>Vote for your favorite burger!</p>
        <Link to="/vote">Click here to vote</Link>
      </div>
    </div>
  );
};

export default Home;