import React from 'react';

const Wind = ({speed, deg}) => {
	const arrowStyle = {
		transform: `rotate(${deg}deg)`,
	};
  	return (
    <div className='wind'>
      	Вітер: {speed} m/s,
      	<span style={arrowStyle}>&#8593;</span>
      	
    </div>
  );
};

export default Wind;