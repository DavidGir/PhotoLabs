import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <HomeRoute
        toggleDarkMode={toggleDarkMode}
        isDarkMode={darkMode}
      />
    </div>
  );
};

export default App;
