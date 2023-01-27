import React from 'react';
import './post.css'
import {SlOptions} from 'react-icons/sl'

const Post = () => {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="assets/profile/profile4.jpg" alt="profile pic" className='sharePic' />
                        <span className="postUsername">Gustavo Alves</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <SlOptions className='postTopRightIcon'/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">My first post</span>
                    <img className='postCenterImg' src="assets/post/post3.jpg" alt="post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="assets/like-button.png" alt="likes" />
                        <span className='likeCounter'>2 likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Post;