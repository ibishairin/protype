import React from 'react';
import '../css/CitySelector.css';

const cities = [
  'Noida', 'Delhi', 'Gurgaon', 'Bangalore', 'Pune', 'Hyderabad', 
  'Kolkata', 'Lucknow', 'Ghaziabad', 'Faridabad', 'Greater Noida'
];

const CitySelector = ({ selectedCity, onCityChange }) => {
  return (
    <section className="city-selector">
      <div className="city-selector-container">
        <h2>Where are you looking for schools?</h2>
        <p>Please select your preferred type and location.</p>
        
        <div className="school-types">
          <button className="type-btn active">Day Schools</button>
          <button className="type-btn">Boarding Schools</button>
          <button className="type-btn">Online Schools</button>
        </div>

        <div className="city-grid">
          {cities.map((city) => (
            <button
              key={city}
              className={`city-btn ${selectedCity === city ? 'active' : ''}`}
              onClick={() => onCityChange(city)}
            >
              📍 {city}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitySelector;
