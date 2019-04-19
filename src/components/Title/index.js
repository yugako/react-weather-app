import React from 'react';

const ContentTitle = ({location}) => {
  return (
    <div className="app-main__title">
    	<div class='bold grey'>{location}</div>
      	<div class='grey'>{new Date().toLocaleString()}</div>
    </div>
  );
};

export default ContentTitle;
