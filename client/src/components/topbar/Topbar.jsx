import React, {useContext, useState} from 'react';
import "./topbar.css"
import {BiSearchAlt} from 'react-icons/bi'
import {CgMenuGridO} from 'react-icons/cg'
import {MdOutlineMessage} from 'react-icons/md'
import {MdNotificationsActive} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import '../leftbar/Leftbar'
import Leftbar from '../leftbar/Leftbar';

const Topbar = ({userInfo}) => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate = useNavigate();
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const handleLogOut = ()=>{
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }
    // console.log(sideBarVisible)
    return (
        <div className='topbarContainer'>
            <div className="mobile-nav">
                <span onClick={()=> setSideBarVisible(!sideBarVisible)}>
                    <FaBars className='topBarIcon'/>
                </span>
            </div>
            <div className={sideBarVisible? "showLeftBar" : 'noShowLeftBar'}>
                <Leftbar sideBarVisible={sideBarVisible} setSideBarVisible={setSideBarVisible}/>
            </div>
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
                        <img src={userInfo.profilePicture? userInfo.profilePicture : `${PF}profile/noAvatar.png`} alt="userPic" className="homePic"/>
                    </Link>
                </div>
                <button className="logOut" onClick={handleLogOut}>
                    <span className='logOutSpan'>Log Out</span>
                    <BiLogOut className='logOutIcon'/>
                </button>
            </div>
        </div>
    );
};


export default Topbar;