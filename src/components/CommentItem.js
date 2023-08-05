import React from 'react';

const CommentItem = ({ comment }) => {
    // Destructure the comment object to get its properties
    const { text } = comment;

    return (
        <div>
            <p>{text}</p>
            {/* You can add more information about each comment if needed */}
        </div>
    );
};

export default CommentItem;
