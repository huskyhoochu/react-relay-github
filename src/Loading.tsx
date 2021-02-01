import React from 'react';

import './Loading.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__indicator">
        <div className="loading__indicator__circle" />
        <div className="loading__indicator__circle" />
        <div className="loading__indicator__circle" />
      </div>
    </div>
  );
};

export default Loading;
