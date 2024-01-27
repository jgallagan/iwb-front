import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vote from './components/Vote';
import Rankings from './components/Rankings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/rankings" element={<Rankings />} />
      </Routes>
    </Router>
  );
}

export default App;