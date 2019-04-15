import React from 'react';

const Clouds = ({clouds, icon}) => {
  return (
    <div className='clouds'>
      Clouds: {clouds}
      <img src={icon} alt=''/>
    </div>
  );
};

export default Clouds;