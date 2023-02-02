import React, {useState} from 'react';
import './post.css'
import {SlOptions} from 'react-icons/sl'

const Post = () => {
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }


    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={`${PF}profile/profile4.jpg`} alt="profile pic" className='sharePic' />
                        <span className="postUsername">Gustavo Alves</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <SlOptions className='postTopRightIcon'/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">My first post</span>
                    <img className='postCenterImg' src={`${PF}post/post3.jpg`} alt="post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={likeHandler} className='likeIcon' src={`${PF}like-button.png`} alt="likes" />
                        <span className='likeCounter'>{like} likes</span>
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