import React, { useEffect, useState} from 'react';
import './profileRightBar.css'
import axios from 'axios';
import { useParams } from "react-router"
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'
import ProfileEdit from '../profileEdit/ProfileEdit';

const ProfileRightBar = ({ user, userInfo }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const id = useParams().id;
    // console.log(userInfo);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/friends/${id}`)
                // console.log('im hereeee',res)
                setFriends(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getFriends();
    }, [id]);

    const handleClick = async () => {
        try {
            await axios.put(`http://localhost:8000/api/user/followAndUnfollow/${user._id}`, { userId: userInfo._id });
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="accountInfo">
                    <div className="accountDetails">
                        <h3>Followers</h3>
                        <span>{user.followers? user.followers.length: '0'}</span>
                    </div>
                    <div className="accountDetails">
                        <h3>Following</h3>
                        <span className='accountSpan'>{user.followings? user.followings.length: '0'}</span>
                    </div>
                </div>
                <div className="profileRightBarTop">
                    {user._id !== userInfo._id && (
                        <button className='followButton' onClick={handleClick}>
                            {userInfo.followings.includes(id) ? "unfollow" : "Follow"}
                            {userInfo.followings.includes(id) ? <BiMinus size={"22px"} /> : <MdAdd size={"22px"} />}
                        </button>
                    )}
                    <div className="introContainer">
                        <h2>Intro</h2>
                        {
                            userInfo._id === id && (
                                <ProfileEdit userInfo={user}/>
                            )
                        }
                    </div>
                    <div className="rightBarTopIntroItem">
                        <span className='itemOne'>City :</span>
                        <span className='itemTwo'> {user.city? user.city : "-"}</span>
                    </div>
                    <div className="rightBarTopIntroItem">
                        <span className='itemOne'>From :</span>
                        <span className='itemTwo'> {user.from? user.from : "-"}</span>
                    </div>
                    <div className="rightBarTopIntroItem">
                        <span className='itemOne'>Relationship :</span>
                        <span className='itemTwo'> {user.relationship? user.relationship : '-'}</span>
                    </div>
                </div>
                <div className="profileRightBarBottom">
                    <h2>Friends</h2>
                    <div className="listFriends">
                        {
                            friends.length !== 0 ?
                                friends.map((item) => {
                                    return (
                                            <Link key={item._id} to={`/profile/${item._id}`} style={{ textDecoration: "none" }}>
                                                <div className="RightBarBottomItem">
                                                    <img className='listFriendsImg' src={item.profilePicture ? item.profilePicture : `${PF}profile/noAvatar.png`} alt="friend" />
                                                    <span className='userFriendName'>{item.username}</span>
                                                </div>
                                            </Link>
                                    )
                                }) : <span className='noFriends'>User has no friends yet</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProfileRightBar;