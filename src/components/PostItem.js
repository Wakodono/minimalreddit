import React from 'react';

const PostItem = ({ post }) => {
    // Destructure the post object to get its properties
    const { title, content } = post;

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default PostItem;
