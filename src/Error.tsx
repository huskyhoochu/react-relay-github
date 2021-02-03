import React from 'react';

import './Error.scss';

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
    </div>
  );
};

export default Error;
