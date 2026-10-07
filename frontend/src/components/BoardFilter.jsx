import React from 'react';
import '../css/BoardFilter.css';

const boards = [
  { name: 'CBSE', count: 185 },
  { name: 'State Board', count: 43 },
  { name: 'IB Board', count: 8 },
  { name: 'Cambridge/IGCSE', count: 12 },
  { name: 'ICSE/CISCE', count: 6 },
];

const BoardFilter = ({ selectedBoard, onBoardChange }) => {
  return (
    <section className="filter-section">
      <div className="filter-container">
        <h2>Explore Schools By Boards</h2>
        <p>Instantly filter and view top-rated schools based on the curriculum that best suits your child's future.</p>
        
        <div className="board-grid">
          {boards.map((board) => (
            <button
              key={board.name}
              className={`board-card ${selectedBoard === board.name ? 'active' : ''}`}
              onClick={() => onBoardChange(board.name)}
            >
              <h3>{board.name}</h3>
              <p>{board.count} Schools</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardFilter;
