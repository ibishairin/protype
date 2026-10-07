import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Ezyschooling</h1>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/explore">Explore Schools</a>
          <a href="/compare">Compare Schools</a>
          <a href="/smart-search">Smart Search</a>
          <a href="/counselling" className="counselling-btn">Get Free Counselling</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
