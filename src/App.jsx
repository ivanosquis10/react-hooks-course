import React, { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Header } from './components/Header';
import { Characters } from './components/Characters';

import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('darkmode');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <Header />

        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
