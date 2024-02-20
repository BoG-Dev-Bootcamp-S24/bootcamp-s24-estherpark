import React from 'react';
import './ArrowButton.css';

const ArrowButton = ({ onArrowButtonClick, disabled }) => (
  <div className = "arrow-container">
    <button className="arrow-button" onClick={() => onArrowButtonClick(false)} disabled={disabled}>
      Previous
    </button>
    <button className="arrow-button" onClick={() => onArrowButtonClick(true)}>Next</button>
  </div>
);

export default ArrowButton;
