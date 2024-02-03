import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vote from './components/Vote';
import Rankings from './components/Rankings';

function App() {
  const [results, setResults] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/vote"
          element={<Vote setResults={setResults} />}
        />
        <Route
          path="/rankings"
          element={<Rankings results={results} />}
        />
      </Routes>
    </Router>
  );
}

export default App;