import React from 'react';
import '../css/AIAssistant.css';

const AIAssistant = () => {
  return (
    <section className="ai-assistant-section">
      <div className="ai-container">
        <div className="ai-content">
          <div className="ai-stars">⭐⭐⭐⭐⭐</div>
          <h2>Admission Consultant of Ezyschooling (ACE)</h2>
          <h3>Not sure, which school to choose?</h3>
          <p>Let our AI assistant guide you with the best options.</p>
          <button className="ai-btn">Get Suggestions</button>
        </div>
        <div className="ai-visual">
          <div className="ai-mac">💻</div>
          <div className="ai-search">🔍</div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
