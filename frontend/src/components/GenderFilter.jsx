import React from 'react';
import '../css/GenderFilter.css';

const GenderFilter = () => {
  const genders = [
    { name: 'Girls', count: 4, icon: '👩' },
    { name: 'Boys', count: 1, icon: '👨' },
    { name: 'Coed', count: 270, icon: '👫' }
  ];

  return (
    <section className="filter-section">
      <div className="filter-container">
        <h2>Schools by Gender</h2>
        <p>Explore co-ed, all-girls', and all-boys' schools in Noida.</p>
        
        <div className="gender-grid">
          {genders.map((gender) => (
            <div key={gender.name} className="gender-card">
              <div className="gender-icon">{gender.icon}</div>
              <h3>{gender.name}</h3>
              <p>{gender.count} Schools</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderFilter;
