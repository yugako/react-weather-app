import React from 'react';

const Humidy = ({humidity, precip}) => {
  return (
  	<div>
	    <div className='humidity'>
	      Humidy: {humidity} %
	    </div>
	    <div className='precip'>
	      Precips: {precip} мм
	    </div>
    </div>
  );
};

export default Humidy;