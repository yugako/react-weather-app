import React from 'react';
import moment from 'moment';
const ContentTitle = ({location, updated}) => {
  return (
    <div className="app-main__title">
    	<div className='bold grey'>{location}</div>
      	<div className='grey'>{moment(updated).format('LLL')}</div>
    </div>
  );
};

export default ContentTitle;
