import React from 'react';
import './profileRightBar.css'

const ProfileRightBar = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER


    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="profileRightBarTop">
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
                        <span className='itemTwo'> {user.relationship===1? 'Single': user.relationship===2? 'Married' : user.relationship===3? 'Complicated': '-'}</span>
                    </div>
                </div>
                <div className="profileRightBarBottom">
                    <h2>Friends</h2>
                    <div className="listFriends">
                        <div className="RightBarBottomItem">
                            <img className='listFriendsImg' src={`${PF}profile/profile2.jpg`} alt="friend" />
                            <span className='userFriendName'>Jade Picon</span>
                        </div>
                        <div className="RightBarBottomItem">
                            <img className='listFriendsImg' src={`${PF}profile/profile1.jpg`} alt="friend" />
                            <span className='userFriendName'>Jade Picon</span>
                        </div>
                        <div className="RightBarBottomItem">
                            <img className='listFriendsImg' src={`${PF}profile/profile3.jpg`} alt="friend" />
                            <span className='userFriendName'>Jade Picon</span>
                        </div>
                        <div className="RightBarBottomItem">
                            <img className='listFriendsImg' src={`${PF}profile/profile4.jpg`} alt="friend" />
                            <span className='userFriendName'>Jade Picon</span>
                        </div>
                        <div className="RightBarBottomItem">
                            <img className='listFriendsImg' src={`${PF}profile/profile5.jpg`} alt="friend" />
                            <span className='userFriendName'>Jade Picon</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProfileRightBar;