import React from 'react';
import {
    useParams
} from "react-router-dom"
import articles from './article-content';
import { ArticlesList } from '../components/ArticlesList';
import { NotFoundPage } from './NotFoundPage';

const ArticlePage = () => {
    const { name } = useParams(); // gain access to the url parameter and be able to pick up this value
    // and do something with it
    const article = articles.find(article => article.name === name); // get the matching article
    const relatedArticles = articles.filter(relatedArticle => relatedArticle.name !== name);
    if (!article) { // when we have no article matching the name passed in, then we return a message
        return (
            <NotFoundPage />
        );
    }
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((p, key) => (
                <p key={key}>{p}</p>
            ))}
            <h3>Other Articles:</h3>
            <ArticlesList articles={relatedArticles} />
        </>
    );
}

export default ArticlePage;