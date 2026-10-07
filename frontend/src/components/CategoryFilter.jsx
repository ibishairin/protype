import React from 'react';
import '../css/CategoryFilter.css';

const CategoryFilter = () => {
  const categories = [
    {
      name: 'Private',
      count: 270,
      description:
        'Premium educational institutions with specialized curricula',
    },
    {
      name: 'International',
      count: 20,
      description: 'Global education standards with international recognition',
    },
  ];

  return (
    <section className="filter-section">
      <div className="filter-container">
        <h2>Schools By Category</h2>
        <p>Explore and apply to private & international schools in Noida</p>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <h3>{category.name}</h3>
              <p className="category-count">{category.count} Schools</p>
              <p className="category-description">{category.description}</p>
              <button className="view-all-btn">View All</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
