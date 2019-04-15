import React from 'react';

const Wind = ({speed, deg}) => {
  return (
    <div className='wind'>
      Wind speed:
      {speed},
      Wind direction:
      {deg}
    </div>
  );
};

export default Wind;