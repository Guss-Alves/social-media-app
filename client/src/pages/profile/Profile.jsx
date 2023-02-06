import React, {useState, useEffect} from 'react';
import './profile.css'
// import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import ProfileRightBar from '../../components/profileRightBar/ProfileRightBar';
import axios from 'axios';
import {useParams} from "react-router"
import ProfileFeed from '../../components/profileFeed/ProfileFeed';

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const id = useParams().id;


    useEffect(() => {
        const fetchUser = async () =>{
            const res = await axios.get(`http://localhost:8000/api/user/${id}`)
            // console.log('res aqui vei',res);
            setUser(res.data);
        };
        fetchUser();
    }, [id]);

    return (
        <div>
            <>
                <Topbar/>
                <div className="profile">
                    <Leftbar/>
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className='profileCoverImg' src={user.coverPicture || `${PF}cover3.jpg`} alt="cover" />
                                <img className='profileUserImg' src={user.profilePicture || `${PF}profile/noAvatar.png`} alt="profile" />
                            </div>
                            <div className="profileInfo">
                                <h1 className='profileUsername'>{user.username}</h1>
                                <span className='profileDesc'>{user?.desc}</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <ProfileFeed username={user.username}/>
                            <ProfileRightBar user={user}/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};


export default Profile;