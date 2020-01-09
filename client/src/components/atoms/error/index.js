import React from 'react';
import './style.css';

const error = ({ errorText }) => {
  return (
    <>
      <p>{errorText}</p>
    </>
  );
};

export default error;
