import React from 'react';
import '../css/FeeFilter.css';

const feeRanges = [
  { name: 'Affordable Schools', range: '< ₹3,000 / month' },
  { name: 'Standard Schools', range: '₹3,000 – ₹6,000 / month' },
  { name: 'Mid-Range Schools', range: '₹6,000 – ₹10,000 / month' },
  { name: 'Premium Schools', range: '₹10,000 – ₹15,000 / month' },
  { name: 'Elite Schools', range: '> ₹15,000 / month' },
];

const FeeFilter = ({ selectedFee, onFeeChange }) => {
  return (
    <section className="filter-section">
      <div className="filter-container">
        <h2>Schools By Fees</h2>
        <p>Explore schools that match your family's budget.</p>

        <div className="fee-grid">
          {feeRanges.map((fee) => (
            <button
              key={fee.name}
              className={`fee-card ${selectedFee === fee.name ? 'active' : ''}`}
              onClick={() => onFeeChange(fee.name)}
            >
              <h3>{fee.name}</h3>
              <p>{fee.range}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeeFilter;
