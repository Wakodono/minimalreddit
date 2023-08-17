'use client'

import React, { useState } from 'react';
import styles from '../app/page.module.scss'

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
        <div className={styles.votingButtons}>
            <button onClick={handleUpvote}>Upvote
                <span role='img' aria-label='Upvote'>
                    👍
                </span>
            </button>
            <button onClick={handleDownvote}>Downvote
                <span role='img' aria-label='Downvote'>
                    👎
                </span>
            </button>
        </div>
    );
};

export default VotingButtons;
