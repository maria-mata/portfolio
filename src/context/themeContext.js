import React, { createContext, useState, useEffect } from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {}
};

export const ThemeContext = createContext(defaultState);

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    localStorage.setItem('dark', !dark);
    setDark(!dark);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const lsDark = JSON.parse(localStorage.getItem('dark'));
    if (lsDark || prefersDark) {
      setDark(true);
    } else {
      setDark(false);
    }

    // hack to prevent FOUC on dark mode
    document.body.style.visibility = 'visible';
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
