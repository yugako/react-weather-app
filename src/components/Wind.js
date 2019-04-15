import React from 'react';

const Wind = ({speed, deg}) => {
	const arrowStyle = {
		transform: `rotate(${deg}deg)`,
	};
  	return (
    <div className='wind'>
      	Wind speed: {speed} m/s,
      	<div style={arrowStyle}>&#8593;</div>
      	
    </div>
  );
};

export default Wind;