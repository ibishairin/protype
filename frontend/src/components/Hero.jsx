import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find the Right Schools in Noida</h1>
        <p>Search, compare & apply to the schools in Noida</p>
        <div className="hero-search">
          <button className="mic-btn">🎤</button>
          <input type="text" placeholder="Search schools..." />
          <button className="search-btn">Search</button>
        </div>
        <div className="free-badge">100% Free</div>
        <div className="counsellors-row">
          <div className="counsellor-avatar">👨‍🏫</div>
          <div className="counsellor-avatar">👩‍🏫</div>
          <div className="counsellor-avatar">👨‍🏫</div>
        </div>
        <div className="counselling-cta">
          <h3>Need help choosing the right school?</h3>
          <p>Talk to our admission experts & get a personalised shortlist for your child.</p>
          <button className="book-counselling">Book Expert Counselling</button>
          <p className="counselled-count">7 Lakh+ parents counselled</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
