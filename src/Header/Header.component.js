import React from 'react';
import './Header.style.scss';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { darkModeState, toggleDarkModeState } from '../shared/globalState';

const Header = () => {
    const isDarkModeEnabled = useRecoilValue(darkModeState);
    const toggleDarkMode = useSetRecoilState(toggleDarkModeState);

    return (
        <header className={ `Header ${ isDarkModeEnabled ? 'Header--dark-mode' : '' }` }>
            <div className="Header__content">
                <div className="Header__content__logo" />
                <div className="Header__content__title-container">
                    <span className="Header__content__title-container__title">
                        The Generic Blog
                    </span>
                </div>
                <div className="Header__content__dark-mode">
                    <label
                        htmlFor="dark-mode-select"
                        className={ `Header__content__dark-mode__label ${ isDarkModeEnabled ? 'Header__content__dark-mode__label--toggled' : '' }` }
                    >
                        Dark mode: 
                    </label>
                    <input
                        id="dark-mode-select"
                        className="Header__content__dark-mode__input"
                        type="checkbox"
                        value={ isDarkModeEnabled }
                        onChange={ toggleDarkMode }
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
