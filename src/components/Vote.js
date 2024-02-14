// src/components/Vote.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the common stylesheet

export default function Vote({ setResults }) {
  const [choice, setChoice] = useState('');
  const [results, setLocalResults] = useState({});

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('vote-result')) || {};
    setLocalResults(storedResults);
    setResults(storedResults);
  }, [setResults]);

  const vote = () => {
    const updatedResults = { ...results, [choice]: (results[choice] ?? 0) + 1 };
    setLocalResults(updatedResults);
    setResults(updatedResults);
    localStorage.setItem('vote-result', JSON.stringify(updatedResults));
  };

  return (
    <div className="vote-container">
      <h1>Vote Page</h1>
      <form className="vote-form">
        <div>
          <label>Which Burger Joint Do You Like Better?</label>
          <div className="radio-options">
            <input
              type="radio"
              value="In-N-Out"
              checked={"In-N-Out" === choice}
              onChange={(e) => setChoice(e.target.value)}
            />
            <span>In-N-Out</span>
            <input
              type="radio"
              value="Whattaburger"
              checked={"Whattaburger" === choice}
              onChange={(e) => setChoice(e.target.value)}
            />
            <span>Whattaburger</span>
          </div>
        </div>
        <button type="button" onClick={vote} className="vote-button">
          Vote
        </button>
      </form>
      <div className="results-container">
        <h2>Results</h2>
        {Object.entries(results).map(([key, val]) => (
          <p key={key}>
            {key}: {val}
          </p>
        ))}
      </div>
      <div className="links-container">
        <h2>Links to Other Pages</h2>
        <nav>
          <ul>
            <li><Link to="/">Go to Home Page</Link></li>
            <li><Link to="/rankings">Go to Rankings Page</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}