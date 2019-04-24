import React from 'react';
import './index.css';

const Clouds = ({clouds, icon, showText=true}) => {
  return (
  	<div className='sky'>
      {showText ? 
        <div className='sky-text'>
          {clouds}
        </div> 
      : ''}
  		{
  			icon ? 
  			<img className='sky-img' src={icon} alt=''/>
  			: ''
  		}
    </div>
  );
};

export default Clouds;