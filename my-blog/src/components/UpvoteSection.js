import React from 'react';

export const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',

        }); // already added the rest as proxy in package
        const body = await result.json();
        console.log(body);
        setArticleInfo(body);
    }
    return (
        <>
            <p>This article has {upvotes} upvotes</p>

            <button onClick={() => upvoteArticle()}>Upvote</button>
        </>
    )
};