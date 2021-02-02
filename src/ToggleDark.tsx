import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './ToggleDark.scss';

const ToggleDark: React.FC<{
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}> = (props) => {
  const onToggle = () => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      props.setTheme('light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      props.setTheme('dark');
    }
  };

  return (
    <button type="button" className="toggle-dark" onClick={onToggle}>
      <FontAwesomeIcon icon={props.theme === 'dark' ? faSun : faMoon} />
    </button>
  );
};

export default ToggleDark;
