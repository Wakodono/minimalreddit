// components/PostList.js
import React from 'react';
import PostItem from './PostItem';

const PostList = () => {
    // Your code to fetch or use data for the list of posts
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            content: 'Content of Post 1',
            comments: [
                { id: 1, text: 'Comment 1 for Post 1' },
                { id: 2, text: 'Comment 2 for Post 1' },
            ],
        },
        {
            id: 2,
            title: 'Post 2',
            content: 'Content of Post 2',
            comments: [
                { id: 3, text: 'Comment 1 for Post 2' },
                { id: 4, text: 'Comment 2 for Post 2' },
            ],
        },
        // Add more posts as needed
    ];

    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
