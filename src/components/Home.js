import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Don't forget to import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Links to other pages */}
      <nav>
        <ul>
          <li><Link to="/vote">Go to Vote Page</Link></li>
          <li><Link to="/rankings">Go to Rankings Page</Link></li>
        </ul>
      </nav>

      {/* Logos and instructions */}
      <div className="logos-container">
        <div className="logo-container">
          <Link to="/vote">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2023%2F04%2FWhataburger-Logo-2048x1152.jpg&f=1&nofb=1&ipt=685f11fbc2e5db96198fbf3852ecd2ee0ad3cf02de05d52cdfa58f01a611033f&ipo=images" alt="Whataburger Logo" className="logo" />
            <p className="logo-instruction">Click to vote for Whataburger</p>
          </Link>
        </div>
        <h1 className="vs-text">VS</h1>
        <div className="logo-container">
          <Link to="/vote">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8c%2FInNOut_2021_logo.svg%2F1200px-InNOut_2021_logo.svg.png&f=1&nofb=1&ipt=f2c228168ff22e96a07c98e0c1dad8520f0aa1aea36302a589ecaee85fa0f92a&ipo=images" alt="In-N-Out Logo" className="logo" />
            <p className="logo-instruction">Click to vote for In-N-Out</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;