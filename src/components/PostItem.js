import React from 'react';
import CommentList from './Comments';

const PostItem = ({ post }) => {
    // Destructure the post object to get its properties
    const { title, content, comments } = post;

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <h3>Comments:</h3>
            <CommentList comments={comments} />
        </div>
    );
};

export default PostItem;
