import React from 'react';
import './themeButton.scss';

export default function ThemeButton({ dark, onClick }) {
  const classList = `theme-button${dark ? ' theme-button--dark': ''}`

  return (
    <button className={classList} onClick={onClick}>
      <div>
        { dark 
          ? (<span role="img" aria-label="moon">🌙</span>)
          : (<span role="img" aria-label="sun">☀️</span>)
        }
      </div>
    </button>
  );
}
