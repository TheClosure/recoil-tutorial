import React, { useState, useEffect } from 'react';
import Article from '../Article/Article.component';
import './ArticleList.style.scss';
import ArticleService from '../shared/ArticleService';

const ArticleList = ({ isDarkModeEnabled }) => {
    const [articles, setArticles] = useState([]);

    // Fetch all articles when the component mounts for the first time
    useEffect(() => {
        const fetchArticles = async () => {
            const result = await ArticleService.getAll();

            setArticles(result);
        }

        fetchArticles();
    }, []);

    return (
        <div className="ArticleList">
            { articles.map(article => (
                <Article
                    key={ article.id }
                    item={ article }
                    isDarkModeEnabled={ isDarkModeEnabled }
                />
            )) }
        </div>
    );
};

export default ArticleList;
