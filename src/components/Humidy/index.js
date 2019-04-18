import React from 'react';

const Humidy = ({humidity}) => {
  return (
    <div className='humidity'>
      Вологість: {humidity} %
    </div>
  );
};

export default Humidy;