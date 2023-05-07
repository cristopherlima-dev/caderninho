// ThemeSwitcher.js
import React from 'react';
import { FormCheck } from 'react-bootstrap';

const ThemeSwitcher = ({ darkTheme, onThemeToggle }) => { 

  const handleThemeToggle = () => {
    onThemeToggle(!darkTheme);
    if (!darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <FormCheck
      type="switch"
      id="theme-switch"
      label={darkTheme ? 'Escuro' : 'Claro'}
      checked={darkTheme}
      onChange={handleThemeToggle}
    />
  );
};

export default ThemeSwitcher;
