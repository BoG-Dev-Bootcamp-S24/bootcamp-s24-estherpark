import React, { useState, useEffect } from 'react';
import './StatsPanel.css';

const StatsPanel = ({ displayInfo, stats, height, weight, pokemonId }) => {
  const [movesData, setMovesData] = useState([]);

  useEffect(() => {
    const fetchMovesData = async () => {
      try {
        const movesArray = stats.map((stat) => stat.move.url);
        const movesDataPromises = movesArray.map(async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        });
        const movesData = await Promise.all(movesDataPromises);
        setMovesData(movesData);
      } catch (error) {
        console.error('Error fetching moves data:', error);
      }
    };

    if (!displayInfo) {
      fetchMovesData();
    }
  }, [displayInfo, stats, pokemonId]);

  return (
    <div>
      <p className={displayInfo ? 'active' : ''}>Info</p>
      <p className={!displayInfo ? 'active' : ''}>Moves</p>
        <div className="stat-container">
            {displayInfo ? (
            <div>
            <p>Height: {height / 10} m</p>
            <p>Weight: {weight / 10} kg</p>
            </div>
        ) : (
            <div>
            <ul>
                {movesData.map((move, index) => (
                <li key={index}>{move.name}</li>
                ))}
            </ul>
            </div>
        )}
        </div>
    </div>
  );
};

export default StatsPanel;
