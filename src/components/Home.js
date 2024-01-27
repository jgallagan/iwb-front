// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <nav>
        <ul>
          <li><a href="/vote">Go to Vote Page</a></li>
          <li><a href="/rankings">Go to Rankings Page</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;