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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="open-sans-regular"
      rel="preload"
      href="/fonts/open-sans-400-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="open-sans-semibold"
      rel="preload"
      href="/fonts/open-sans-600-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="ubuntu-bold"
      rel="preload"
      href="/fonts/ubuntu-700-normal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
