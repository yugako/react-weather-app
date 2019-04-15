import React from 'react';

const Clouds = ({clouds, icon}) => {
  return (
  	<div>
  		<div className='clouds'>
  		  Clouds: {clouds}
  		</div>
  		{
  			icon ? 
  			<img src={icon} alt=''/>
  			: ''
  		}
	    
    </div>
  );
};

export default Clouds;