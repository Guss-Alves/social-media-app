import React, {useContext} from 'react';
import "./topbar.css"
import {BiSearchAlt} from 'react-icons/bi'
import {CgMenuGridO} from 'react-icons/cg'
import {MdOutlineMessage} from 'react-icons/md'
import {MdNotificationsActive} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

const Topbar = () => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    console.log(user.username);
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to='/' style={{textDecoration: "none"}}><span className='logo'>Gusbook</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <BiSearchAlt className= "searchIcon" size= "30px"/>
                    <input type="text" placeholder='Search for your friends' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarFeatures">
                    <div className="topbarIcons">
                        <CgMenuGridO size="24px"/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIcons">
                        <MdOutlineMessage size="24px"/>
                        <span className='topbarIconBadge'>5</span>
                    </div>
                    <div className="topbarIcons">
                        <MdNotificationsActive size="24px"/>
                        <span className='topbarIconBadge'>7</span>
                    </div>
                </div>
                <div >
                    <Link to={`/profile/${user._id}`} style={{textDecoration: "none"}}>
                        <img src={user.profilePicture? PF + user.profilePicture : `${PF}profile/noAvatar.png`} alt="userPic" className="homePic"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Topbar;