import React from 'react';
import '../css/SchoolList.css';

const SchoolList = ({ schools, loading }) => {
  if (loading) {
    return <div className="loading">Loading schools...</div>;
  }

  return (
    <section className="school-list-section">
      <div className="school-list-container">
        <h2>Most Enquired Schools in {schools.length > 0 ? schools[0].location : 'Noida'}</h2>
        <p>Parents across the area are applying to these schools the most.</p>
        
        <div className="school-grid">
          {schools.map((school) => (
            <div key={school.id} className="school-card">
              <div className="school-image">
                <div className="school-placeholder">
                  <span>🏫</span>
                </div>
              </div>
              <div className="school-info">
                <h3>{school.name}</h3>
                <p className="location">📍 {school.sector}, {school.location}</p>
                <p className="board">Affiliated To: {school.board}</p>
                <div className="school-details">
                  <span className="fees">💰 {school.fees}</span>
                  <span className="rating">⭐ {school.rating}</span>
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolList;
