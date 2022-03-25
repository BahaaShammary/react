import React from 'react';
import { Link } from 'react-router-dom'; //this helps us link to pages

export const ArticlesList = ({ articles }) => { // having the list of articles passed in allows us 
    //to display different lists of articles
    return (
        <>
            {articles.map((article, key) =>
                <Link key={key} className="article-list-item" to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            )}
        </>
    );
};

