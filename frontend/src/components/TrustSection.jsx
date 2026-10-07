import React from 'react';
import '../css/TrustSection.css';

const TrustSection = () => {
  const stats = [
    { number: '1M+', label: 'Parents Served' },
    { number: '12K+', label: 'Verified Schools' },
    { number: '800K+', label: 'Monthly Visits' },
    { number: '5K+', label: 'Parent Reviews' },
    { number: '24/7', label: '1-on-1 Counselling' },
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2>Why Parents Trust Ezyschooling?</h2>
        <p>What makes us the No. 1 school admission platform in India</p>

        <div className="trust-grid">
          {stats.map((stat, index) => (
            <div key={index} className="trust-card">
              <div className="trust-number">{stat.number}</div>
              <div className="trust-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
