import React, { useState, useEffect, useContext } from 'react';
import './post.css'
import { SlOptions } from 'react-icons/sl'
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler = () => {
        try {
            axios.put(`http://localhost:8000/api/likes/${post._id}`, { userId: currentUser._id });
        } catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8000/api/user/${post.userId}`)
            // console.log('res dos posts',res);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user._id}`} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                            <img src={user.profilePicture ? PF + user.profilePicture : PF + "profile/noAvatar.png"} alt="" className='sharePic' />
                            <span className="postUsername">{user.username} </span>
                        </Link>
                        <span className="postDate">{moment.utc(post.createdAt).fromNow()}</span>
                    </div>
                    <div className="postTopRight">
                        <SlOptions className='postTopRightIcon' />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postCenterImg' src={PF + post.img} alt="" />
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