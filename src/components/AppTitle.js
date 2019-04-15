import React from 'react';

const AppTitle = () => {
  return (
    <header className="app-title">
        Weather on {new Date().toLocaleString()}
    </header>
  );
};

export default AppTitle;