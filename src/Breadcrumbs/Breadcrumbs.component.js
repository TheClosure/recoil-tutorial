import React from 'react';
import './Breadcrumbs.style.scss';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../shared/globalState';

const Breadcrumbs = () => {
    const isDarkModeEnabled = useRecoilValue(darkModeState);

    return (
        <nav className={ `Breadcrumbs ${ isDarkModeEnabled ? 'Breadcrumbs--dark-mode' : '' }` }>
            <button href="#" className="Breadcrumbs__item">Blog</button>
            <button href="#" className="Breadcrumbs__item">New</button>
            <button href="#" className="Breadcrumbs__item">Popular</button>
        </nav>
    );
};

export default Breadcrumbs;
