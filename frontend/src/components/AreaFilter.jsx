import React from 'react';
import '../css/AreaFilter.css';

const areas = [
  { name: 'Sector 45', count: 15 },
  { name: 'Sector 62A', count: 14 },
  { name: 'Sector 49', count: 11 },
  { name: 'Sector 62', count: 9 },
  { name: 'Sector 63', count: 9 },
  { name: 'Sector 44', count: 9 },
  { name: 'Sector 51', count: 8 },
  { name: 'Sector 22', count: 7 },
];

const AreaFilter = ({ selectedArea, onAreaChange }) => {
  return (
    <section className="filter-section">
      <div className="filter-container">
        <h2>Schools by Popular Areas</h2>
        <p>Parents are mostly applying for schools in these areas.</p>

        <div className="area-grid">
          {areas.map((area) => (
            <button
              key={area.name}
              className={`area-card ${selectedArea === area.name ? 'active' : ''}`}
              onClick={() => onAreaChange(area.name)}
            >
              <h3>{area.name}</h3>
              <p>{area.count} schools</p>
            </button>
          ))}
        </div>
        <button className="view-all-btn">View all popular areas</button>
      </div>
    </section>
  );
};

export default AreaFilter;
