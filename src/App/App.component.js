import React, { useState } from 'react';
import Header from '../Header/Header.component';
import './App.style.scss';
import MainContent from '../MainContent/MainContent.component';

const App = () => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    const toggleDarkMode = () => setIsDarkModeEnabled(!isDarkModeEnabled);

    return (
        <div className={ `App ${ isDarkModeEnabled ? 'App--dark-mode' : '' }` }>
            <Header
                isDarkModeEnabled={ isDarkModeEnabled }
                toggleDarkMode={ toggleDarkMode }
            />
            <MainContent
                isDarkModeEnabled={ isDarkModeEnabled }
            />
        </div>
    );
};

export default App;
