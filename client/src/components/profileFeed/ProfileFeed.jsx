import React, {useState, useEffect} from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './profileFeed.css'
import axios from 'axios';


const ProfileFeed = ({username}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = await axios.get('http://localhost:8000/api/profile/'+ username)
            console.log('res aqui doo profileFeed',res);
            setPosts(
                res.data.sort((p1,p2)=>{
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        };
        fetchPosts();
    }, [username]);


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

export default ProfileFeed;