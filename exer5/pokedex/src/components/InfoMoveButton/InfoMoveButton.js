import React from 'react';
import './InfoMoveButton.css';

const InfoMoveButton = ({ displayInfo, onInfoMoveButtonClick }) => (
  <div className = "active-container">
    <button className = "active-button"
      onClick={() => onInfoMoveButtonClick(true)}
      style={{ backgroundColor: displayInfo ? 'lightgreen' : 'white' }}
    >
      Info
    </button>
    <button className = "active-button"
      onClick={() => onInfoMoveButtonClick(false)}
      style={{ backgroundColor: !displayInfo ? 'lightgreen' : 'white' }}
    >
      Moves
    </button>
  </div>
);

export default InfoMoveButton;
