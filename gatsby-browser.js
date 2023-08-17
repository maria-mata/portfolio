import React from 'react';
import ThemeProvider from './src/context/themeContext';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}
