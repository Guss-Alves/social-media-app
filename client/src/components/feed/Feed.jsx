import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
            </div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
        </div>
    );
};

export default Feed;