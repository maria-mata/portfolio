import React from 'react';
import ThemeProvider from './src/context/themeContext';
import 'prismjs/themes/prism-tomorrow.css';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}
