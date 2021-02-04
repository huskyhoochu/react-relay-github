import React from 'react';
import useDarkMode, {
  initialUseDarkMode,
  useDarkModeProps,
} from '../hook/useDarkMode';

export const ThemeContext = React.createContext<{
  useDarkModeProps: useDarkModeProps;
}>({
  useDarkModeProps: initialUseDarkMode,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const useDarkModeProps = useDarkMode();

  const initialValue = {
    useDarkModeProps,
  };
  return (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  );
};
