import React from 'react';

const AppTitle = () => {
  return (
    <header className="app-title">
        Weather <br /> 
        Current time: {new Date().toLocaleString()}
    </header>
  );
};

export default AppTitle;