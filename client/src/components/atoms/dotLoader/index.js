import React from 'react';
import './style.css';

const dotLoader = () => {
  return (
    <>
      <div className="loading-dots">
        <span className="dot one">.</span>
        <span className="dot two">.</span>
        <span className="dot three">.</span>
      </div>
    </>
  );
};

export default dotLoader;
