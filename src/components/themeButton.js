import React from 'react';
import Sun from './icons/sun';
import Moon from './icons/moon';
import './themeButton.scss';

export default function ThemeButton({ dark, onClick }) {
  const classList = `theme-button${dark ? ' theme-button--dark': ''}`
  const aria = dark ? 'Light theme' : 'Dark theme';

  return (
    <button 
      aria-label={aria} 
      className={classList} 
      onClick={onClick}>
      { dark 
        ? <Sun aria-hidden="true" />
        : <Moon aria-hidden="true" />
      }
    </button>
  );
}
