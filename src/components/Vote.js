import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Vote() {
  const [choice, setChoice] = useState("");
  const [results, setResults] = useState({});

  const vote = () => {
    if (!localStorage.getItem("vote-result")) {
      localStorage.setItem("vote-result", JSON.stringify({}));
    }
    setResults({ ...results, [choice]: (results[choice] ?? 0) + 1 });
  };

  useEffect(() => {
    localStorage.setItem("vote-result", JSON.stringify(results));
  }, [results]);

  return (
    <div>
      {/* Header */}
      <h1>Vote Page</h1>
      
      {/* Main Content */}
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
      
      {/* Links to other pages */}
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