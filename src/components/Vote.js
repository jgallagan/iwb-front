import React, { useState, useEffect } from "react";

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
          vote
        </button>
      </form>
      <div>
        <h1>result</h1>
        {Object.entries(results).map(([key, val]) => {
          return (
            <p key={key}>
              {key}: {val}
            </p>
          );
        })}
      </div>
    </div>
  );
}