import React, { useEffect, useState, useContext } from 'react';
import './profileRightBar.css'
import axios from 'axios';
import { useParams } from "react-router"
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { MdAdd } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'

const ProfileRightBar = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const id = useParams().id;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?.id)
    );

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/friends/${id}`)
                // console.log('im hereeee',res)
                setFriends(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getFriends();
    }, [id]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(`http://localhost:8000/api/user/unfollow/${user._id}`, {
                    userId: currentUser._id,
                });
                
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`http://localhost:8000/api/user/follow/${user._id}`, {
                    userId: currentUser._id,
                });
                
                dispatch({ type: "FOLLOW", payload: user._id });
            }
            setFollowed(!followed);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="profileRightBarTop">
                    {user._id !== currentUser._id && (
                        <button className='followButton' onClick={handleClick}>
                            {followed ? "unfollow" : "Follow"}
                            {followed ? <BiMinus size={"22px"} /> : <MdAdd size={"22px"} />}
                        </button>
                    )}
                    <h2>Intro</h2>
                    <div className="rightBarTopIntroItem">
                        <span className='itemOne'>City :</span>
                        <span className='itemTwo'> {user.city}</span>
                    </div>
                    <div className="rightBarTopIntroItem">
                        <span className='itemOne'>From :</span>
                        <span className='itemTwo'> {user.from}</span>
                    </div>
                    <div className="rightBarTopIntroItem">
                        <span className='itemOne'>Relationship :</span>
                        <span className='itemTwo'> {user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'Married' : user.relationship === 3 ? 'Complicated' : '-'}</span>
                    </div>
                </div>
                <div className="profileRightBarBottom">
                    <h2>Friends</h2>
                    <div className="listFriends">
                        {
                            friends.length !== 0 ?
                                friends.map((item) => {
                                    return (
                                        <>
                                            <Link to={`/profile/${item._id}`} style={{ textDecoration: "none" }}>
                                                <div key={item._id} className="RightBarBottomItem">
                                                    <img className='listFriendsImg' src={item.profilePicture ? PF + item.profilePicture : `${PF}profile/noAvatar.png`} alt="friend" />
                                                    <span className='userFriendName'>{item.username}</span>
                                                </div>
                                            </Link>
                                        </>
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