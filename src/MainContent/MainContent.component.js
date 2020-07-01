import React from 'react';
import ArticleList from '../ArticleList/ArticleList.component';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.component';
import './MainContent.style.scss';

const MainContent = ({ isDarkModeEnabled, activeLanguage }) => {
    return (
        <main className="MainContent">
            <Breadcrumbs
                isDarkModeEnabled={ isDarkModeEnabled }
                activeLanguage={ activeLanguage }
            />
            <ArticleList
                isDarkModeEnabled={ isDarkModeEnabled }
                activeLanguage={ activeLanguage }
            />
        </main>
    );
};

export default MainContent;
