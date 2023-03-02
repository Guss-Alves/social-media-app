import React, {useState, useEffect, useContext} from 'react';
import './profile.css'
// import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import ProfileRightBar from '../../components/profileRightBar/ProfileRightBar';
import axios from 'axios';
import {useParams} from "react-router"
import ProfileFeed from '../../components/profileFeed/ProfileFeed';
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const [currentUser, setcurrentUser] = useState({});
    const id = useParams().id;
    const { user:storageUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () =>{
            const res = await axios.get(`http://localhost:8000/api/user/${storageUser._id}`)
            setcurrentUser(res.data);
        };
        fetchUser();
    }, [storageUser._id]);

    useEffect(() => {
        const fetchUser = async () =>{
            const res = await axios.get(`http://localhost:8000/api/user/${id}`)
            setUser(res.data);
        };
        fetchUser();
    }, [id]);

    return (
        <div>
            <>
                <Topbar userInfo={currentUser}/>
                <div className="profile">
                    <Leftbar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className='profileCoverImg' src={user.coverPicture || `${PF}cover3.jpg`} alt="cover" />
                                <img className='profileUserImg' src={user.profilePicture? user.profilePicture : `${PF}profile/noAvatar.png`} alt="profile" />
                            </div>
                            <div className="profileInfo">
                                <h1 className='profileUsername'>{user.username}</h1>
                                <span className='profileDesc'>{user?.desc}</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <ProfileFeed  userInfo={user}/>
                            <ProfileRightBar user={user} userInfo={currentUser}/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};


export default Profile;