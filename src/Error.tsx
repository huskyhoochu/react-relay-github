import React from 'react';

import './Error.scss';

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
      <a className="error__link" href="/">
        홈으로
      </a>
    </div>
  );
};

export default Error;
