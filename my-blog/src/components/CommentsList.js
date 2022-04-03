import React from 'react'

export const CommentsList = ({ comments }) => (
    <>
        <h3>Comments:</h3>
        {comments.map((comment, key) => (
            <div className='comment'>
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </>
)