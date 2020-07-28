import React from 'react';
import Article from '../Article/Article.component';
import './ArticleList.style.scss';
import { useRecoilValueLoadable } from 'recoil';
import { articleByIdQuery } from '../shared/globalState';

const ArticleList = () => {
    const article = useRecoilValueLoadable(articleByIdQuery(3));

    const renderArticles = () => {
        switch (article.state) {
            case 'hasValue':
                const articleData = article.contents;
                return (
                    <Article
                        key={ articleData.id }
                        item={ articleData }
                    />
                );
            default:
            case 'loading':
            case 'hasError':
                return <div>Loading...</div>;
        }
    };

    // Fetch all articles when the component mounts for the first time
    // useEffect(() => {
    //     const fetchArticles = async () => {
    //         const result = await ArticleService.getAll();

    //         setArticles(result);
    //     }

    //     fetchArticles();
    // }, []);

    return (
        <div className="ArticleList">
            { renderArticles() }
        </div>
    );
};

export default ArticleList;
