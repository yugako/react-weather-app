import React from 'react';

const Clouds = ({clouds, icon}) => {
  return (
  	<div>
  		<div className='sky'>
  		  Небо: {clouds}
  		</div>
  		{
  			icon ? 
  			<img className='sky-img' src={icon} alt=''/>
  			: ''
  		}
	    
    </div>
  );
};

export default Clouds;