import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Vote Page</h1>
      <form>
        <div>
          <label>Which Burger Joint Do You Like Better?</label>
          <input
            type="radio"
            value="In-N-Out"
            checked={"In-N-Out" === choice}
            onChange={(e) => setChoice(e.target.value)}
          />
          In-N-Out
          <input
            type="radio"
            value="Whattaburger"
            checked={"Whattaburger" === choice}
            onChange={(e) => setChoice(e.target.value)}
          />
          Whattaburger
        </div>
        <button type="button" onClick={vote}>
          Vote
        </button>
      </form>
      <div>
        <h2>Results</h2>
        {Object.entries(results).map(([key, val]) => (
          <p key={key}>
            {key}: {val}
          </p>
        ))}
      </div>
      <div>
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