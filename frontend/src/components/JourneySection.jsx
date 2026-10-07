import React from 'react';
import '../css/JourneySection.css';

const JourneySection = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Discovery',
      description: 'Explore a vast database of schools, filtering by location, programs, and more to find the perfect fit.',
      buttonText: 'Search Now'
    },
    {
      icon: '⚖️',
      title: 'Comparison',
      description: 'Compare schools side-by-side, evaluating key metrics like tuition, graduation rates, and student reviews.',
      buttonText: 'Compare Now'
    },
    {
      icon: '👨‍🏫',
      title: 'Counseling',
      description: 'Connect with experienced counselors for personalized advice and support throughout your application process.',
      buttonText: 'Get Free Counselling'
    }
  ];

  return (
    <section className="journey-section">
      <div className="journey-container">
        <h2>Make Your Admission Journey Easier</h2>
        <p>Make confident decisions with Ezyschooling's trusted support.</p>
        
        <div className="journey-grid">
          {steps.map((step, index) => (
            <div key={index} className="journey-card">
              <div className="journey-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <button className="journey-btn">{step.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
