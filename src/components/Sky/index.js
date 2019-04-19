import React from 'react';
import './index.css';

const Clouds = ({clouds, icon}) => {
  return (
  	<div>
  		<div className='sky'>
  		  {clouds}
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