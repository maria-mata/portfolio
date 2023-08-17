import React, { createContext, useState, useEffect } from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {}
};

export const ThemeContext = createContext(defaultState);

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    localStorage.setItem('dark', JSON.stringify(dark));
    setDark(!dark);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const lsDark = JSON.parse(localStorage.getItem('dark'));
    if (lsDark) {
      setDark(lsDark);
    } else if (prefersDark) {
      setDark(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
