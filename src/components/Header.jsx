import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setDarkMode(!darkMode);
    theme === 'ligthmode' ? setTheme('darkmode') : setTheme('ligthmode');
  };

  return (
    <div className="Header">
      <h1>Rick and Morty App</h1>
      <button type="button" onClick={handleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export { Header };
