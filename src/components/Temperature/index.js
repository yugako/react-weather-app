import React from 'react';
import './index.css';
const Temperature = ({celsius, fahrenheit}) => {
  return (
    <div className='temp'>
      <div className='temp-value'>
      	<span className='bold grey'>{celsius}</span>
      	<sup>o</sup>C
      </div>
      <div className='temp-value'>
      	<span className='bold grey'>{fahrenheit}</span>
      	<sup>o</sup>F
      </div>  
    </div>
  );
};

export default Temperature;
