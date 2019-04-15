import React from 'react';

const ContentTitle = ({town, country}) => {
  return (
    <div className="app-main__title">
      Location: {town}, {country}
    </div>
  );
};

export default ContentTitle;
