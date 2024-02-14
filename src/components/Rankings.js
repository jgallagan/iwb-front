// src/components/Rankings.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the common stylesheet

const Rankings = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    // Retrieve results from localStorage when the component mounts
    const storedResults = JSON.parse(localStorage.getItem('vote-result')) || {};
    setResults(storedResults);
  }, []);

  return (
    <div>
      <h2>Rankings Page</h2>
      {/* Display results */}
      {Object.entries(results).map(([key, val]) => (
        <p key={key}>
          {key}: {val}
        </p>
      ))}
      {/* Navigation links */}
      <nav>
        <ul>
          <li><Link to="/">Go to Home Page</Link></li>
          <li><Link to="/vote">Go to Vote Page</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Rankings;