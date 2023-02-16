import React, {useState, useEffect, useContext } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

const Feed = ({userInfo}) => {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () =>{
            await axios.get(`http://localhost:8000/api/timeline/${user._id}`)
            .then(res=>{
                setPosts(
                    res.data.sort((p1,p2)=>{
                        return new Date(p2.createdAt) - new Date(p1.createdAt);
                    })
                );
            })
            .catch(err =>{
                console.log(err);
            })
            // console.log('res aqui do feed',res);
        };
        fetchPosts();
    }, [user._id]);


    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share userInfo={userInfo}/>
            </div>
                {
                    posts.map((p)=>{
                        return(
                            <Post key={p._id} post={p}/>
                        )
                    })
                }
        </div>
    );
};

export default Feed;