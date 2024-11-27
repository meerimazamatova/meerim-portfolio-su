import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Click below to learn more about me!</p>
      <a href="#about-me" className="home-button">
        Go to About Me
      </a>
    </div>
  );
};

export default Home;
