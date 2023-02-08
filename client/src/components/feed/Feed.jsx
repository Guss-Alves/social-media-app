import React, {useState, useEffect, useContext } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

const Feed = () => {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = await axios.get(`http://localhost:8000/api/timeline/${user._id}`)
            console.log('res aqui do feed',res);
            setPosts(res.data);
        };
        fetchPosts();
    }, [user._id]);


    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
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