import React from 'react';

const Temperature = ({temperature}) => {
  return (
    <div className='temp'>
      Temperature: {temperature} <sup>o</sup>C 
    </div>
  );
};

export default Temperature;
