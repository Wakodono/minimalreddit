'use client'

import React, { useState } from 'react';

const VotingButtons = ({ initialVotes }) => {
    const [votes, setVotes] = useState(0);
    const handleUpvote = () => {
        // update votes in the state
        setVotes(votes + 1);
    };

    const handleDownvote = () => {
        if (votes > 0) {
            // Update the votes in the state, but not below zero
            setVotes(votes - 1);
        }
    };

    return (
        <div>
            <button onClick={handleUpvote}>Upvote</button>
            <span>{initialVotes}</span>
            <button onClick={handleDownvote}>Downvote</button>
        </div>
    );
};

export default VotingButtons;
