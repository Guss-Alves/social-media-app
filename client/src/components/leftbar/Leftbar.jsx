import React from 'react';
import './leftbar.css'
import {MdGroups} from 'react-icons/md'
import {IoStorefront} from 'react-icons/io5'
import {MdOutlineSmartDisplay} from 'react-icons/md'
import {GoCalendar} from 'react-icons/go'
import {CgGames} from 'react-icons/cg'
import {BiSave} from 'react-icons/bi'
import {BiHealth} from 'react-icons/bi'
import {BsQuestionLg} from 'react-icons/bs'
import {BsArrowDownCircle} from 'react-icons/bs'

const Leftbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className='leftBar'>
            <div className="leftBarWrapper">
                <ul className='leftBarList'>
                    <li className='leftBarItem'>
                        <MdGroups size= '35px'/>
                        <span className="leftBarSpan">Groups</span>
                    </li>
                    <li className='leftBarItem'>
                        <IoStorefront size= '35px' />
                        <span className="leftBarSpan">Market place</span>
                    </li>
                    <li className='leftBarItem'>
                        <MdOutlineSmartDisplay size= '35px'/>
                        <span className="leftBarSpan">Watch</span>
                    </li>
                    <li className='leftBarItem'>
                        <GoCalendar size= '35px'/>
                        <span className="leftBarSpan">Events</span>
                    </li>
                    <li className='leftBarItem'>
                        <BiHealth size= '35px'/>
                        <span className="leftBarSpan">Health</span>
                    </li>
                    <li className='leftBarItem'>
                        <CgGames size= '35px'/>
                        <span className="leftBarSpan">Play Games</span>
                    </li>
                    <li className='leftBarItem'>
                        <BiSave size= '35px'/>
                        <span className="leftBarSpan">Saved</span>
                    </li>
                    <li className='leftBarItem'>
                        <BsQuestionLg size= '35px'/>
                        <span className="leftBarSpan">Quetions</span>
                    </li>
                </ul>
                <button className='leftBarButton'>
                    <BsArrowDownCircle size= '30px'/>
                    <span className='leftBarSpan'>See more</span>
                </button>
                <hr className='leftBarHr' />
                <h3 className='leftBarTitle'>Suggested Friends</h3>
                <div className="leftBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='leftBarFriendsImg' src={`${PF}profile/profile2.jpg`} alt="" />
                            </div>
                            <span className="friendsUserName">Jade Picon</span>
                        </div>
                        <div className="leftBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='leftBarFriendsImg' src={`${PF}profile/profile3.jpg`} alt="" />
                            </div>
                            <span className="friendsUserName">Alex Gomes</span>
                        </div>
                        <div className="leftBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='leftBarFriendsImg' src={`${PF}profile/profile4.jpg`} alt="" />
                            </div>
                            <span className="friendsUserName">John Carter</span>
                        </div>
                        <div className="leftBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='leftBarFriendsImg' src={`${PF}profile/profile5.jpg`} alt="" />
                            </div>
                            <span className="friendsUserName">Logan Paul</span>
                        </div>
                        <div className="leftBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='leftBarFriendsImg' src={`${PF}profile/profile1.jpg`} alt="" />
                            </div>
                            <span className="friendsUserName">Joao Carlos</span>
                        </div>
            </div>
        </div>
    );
};


export default Leftbar;