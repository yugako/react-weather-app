import React from 'react';

const Humidy = ({humidity, precip}) => {
  return (
  	<div>
	    <div className='humidity'>
	      Вологість: {humidity} %
	    </div>
	    <div className='precip'>
	      Опади: {precip} мм
	    </div>
    </div>
  );
};

export default Humidy;