import React from 'react';
import CommentList from './Comments';
import VotingButtons from './VotingButtons';

const PostItem = ({ post }) => {
    // Destructure the post object to get its properties
    const { title, content, comments } = post;

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <h3>Comments:</h3>
            <VotingButtons />
            <CommentList comments={comments} />
        </div>
    );
};

export default PostItem;
