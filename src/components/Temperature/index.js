import React from 'react';

const Temperature = ({celsius, fahrenheit}) => {
  return (
    <div className='temp'>
      <div>{celsius} <sup>o</sup>C</div>
      <div>{fahrenheit} <sup>o</sup>F</div>  
    </div>
  );
};

export default Temperature;
