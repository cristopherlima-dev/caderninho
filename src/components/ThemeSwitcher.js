// ThemeSwitcher.js
import React from 'react';
import { FormCheck } from 'react-bootstrap';

const ThemeSwitcher = ({ darkTheme, onThemeToggle }) => { // Adicione o prop darkTheme

  const handleThemeToggle = () => {
    onThemeToggle(!darkTheme);
  };

  return (
    <FormCheck
      type="switch"
      id="theme-switch"
      label={darkTheme ? 'Tema escuro' : 'Tema claro'}
      checked={darkTheme}
      onChange={handleThemeToggle}
    />
  );
};

export default ThemeSwitcher;
