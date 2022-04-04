import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom"
import articles from './article-content';
import { ArticlesList } from '../components/ArticlesList';
import { NotFoundPage } from './NotFoundPage';
import { CommentsList} from '../components/CommentsList';
import { UpvoteSection } from '../components/UpvoteSection';
import { AddCommentForm} from '../components/AddCommentForm';

const ArticlePage = () => {
    const { name } = useParams(); // gain access to the url parameter and be able to pick up this value
    console.log(name);
    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: [],
    });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`); // already added the rest as proxy in package
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);
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
            <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            {article.content.map((p, key) => (
                <p key={key}>{p}</p>
            ))}
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={relatedArticles} />
        </>
    );
}

export default ArticlePage;