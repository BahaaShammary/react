import React, { useState } from 'react';

export const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    const postComment = async () => {
        console.log(username, comment);
        const result = await fetch(`/api/articles/${articleName}/comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: comment }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json();

        setArticleInfo(body);
        // reset the values
        setUsername('');
        setComment('');
    };

    return (
        <div id="add-comment-form">
            <h3>Add a comment</h3>
            <label>
                Name:
                <input type="text" value={username}
                    onChange={(event => setUsername(event.target.value))} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={comment}
                    onChange={(event => setComment(event.target.value))} />
            </label>
            <button onClick={postComment}>Comment</button>
        </div>
    )
} 