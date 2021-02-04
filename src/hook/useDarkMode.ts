import { useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const initTheme = () => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    }
  };

  const toggleTheme = () => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return {
    theme,
    initTheme,
    toggleTheme,
  };
};

export type useDarkModeProps = ReturnType<typeof useDarkMode>;

export const initialUseDarkMode: useDarkModeProps = {
  theme: 'light',
  initTheme: () => {},
  toggleTheme: () => {},
};

export default useDarkMode;
