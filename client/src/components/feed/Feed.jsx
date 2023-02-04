import React, {useState, useEffect} from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import axios from 'axios';

const Feed = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = await axios.get('http://localhost:8000/api/timeline/63d0660e5695830c1e0d9c5f')
            console.log('res',res);
            setPost(res.data);
        };
        fetchPosts();
    }, []);


    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
            </div>
                <Post/>
                {
                    post.map((item) =>{
                        return(
                            <div>
                                {item._id}
                                {item.desc}
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default Feed;