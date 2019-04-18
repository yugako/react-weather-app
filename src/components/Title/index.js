import React from 'react';

const ContentTitle = ({location}) => {
  return (
    <div className="app-main__title">
    	Погода у 
    	<span class='bold'>{location}</span> <br/>
      	станом на 
      	<span class='bold'>{new Date().toLocaleString()}</span>
      	
    </div>
  );
};

export default ContentTitle;
