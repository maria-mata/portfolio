import React from 'react';
import Sun from './icons/sun';
import Moon from './icons/moon';
import './themeButton.scss';

export default function ThemeButton({ dark, onClick }) {
  const aria = dark ? 'Light theme' : 'Dark theme';

  return (
    <button 
      aria-label={aria} 
      className="theme-button"
      onClick={onClick}>
      { dark 
        ? <Sun aria-hidden="true" />
        : <Moon aria-hidden="true" />
      }
    </button>
  );
}
