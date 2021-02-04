import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './ToggleDark.scss';
import { ThemeContext } from './context/themeContext';

const ToggleDark: React.FC = () => {
  const { useDarkModeProps } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="toggle-dark"
      onClick={useDarkModeProps.toggleTheme}
    >
      <FontAwesomeIcon
        icon={useDarkModeProps.theme === 'dark' ? faSun : faMoon}
      />
    </button>
  );
};

export default ToggleDark;
