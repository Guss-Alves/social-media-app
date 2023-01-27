import React from 'react';
import "./topbar.css"
import {BiSearchAlt} from 'react-icons/bi'
import {CgMenuGridO} from 'react-icons/cg'
import {MdOutlineMessage} from 'react-icons/md'
import {MdNotificationsActive} from 'react-icons/md'

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Gusbook</span>
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
                    <img src="assets/profile/profile4.jpg" alt="userPic" className="homePic"/>
                </div>
            </div>
        </div>
    );
};


export default Topbar;