import React from 'react';
import './profile.css'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import ProfileRightBar from '../../components/profileRightBar/ProfileRightBar';

const Profile = () => {
    return (
        <div>
            <>
                <Topbar/>
                <div className="profile">
                    <Leftbar/>
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className='profileCoverImg' src="assets/cover3.jpg" alt="cover" />
                                <img className='profileUserImg' src="assets/profile/profile4.jpg" alt="profile" />
                            </div>
                            <div className="profileInfo">
                                <h1 className='profileUsername'>Gustavo Alves</h1>
                                <span className='profileDesc'>This is just for fun !!</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed/>
                            <ProfileRightBar/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};


export default Profile;