import React from 'react';
import ArticleList from '../ArticleList/ArticleList.component';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.component';
import './MainContent.style.scss';

const MainContent = ({ isDarkModeEnabled }) => {
    return (
        <main className="MainContent">
            <Breadcrumbs isDarkModeEnabled={ isDarkModeEnabled } />
            <ArticleList isDarkModeEnabled={ isDarkModeEnabled } />
        </main>
    );
};

export default MainContent;
