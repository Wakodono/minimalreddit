import React from 'react';
import VotingButtons from './VotingButtons';

const CommentItem = ({ comment }) => {
    // Destructure the comment object to get its properties
    const { text } = comment;

    return (
        <div>
            <p>{text}</p>
            {/* You can add more information about each comment if needed */}
            <VotingButtons />
        </div>
    );
};

export default CommentItem;
