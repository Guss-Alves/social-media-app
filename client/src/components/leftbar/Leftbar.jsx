import React, { useState, useEffect, useContext } from 'react';
import './leftbar.css'
import { MdGroups } from 'react-icons/md'
import { IoStorefront } from 'react-icons/io5'
import { MdOutlineSmartDisplay } from 'react-icons/md'
import { GoCalendar } from 'react-icons/go'
import { CgGames } from 'react-icons/cg'
import { BiSave } from 'react-icons/bi'
import { BiHealth } from 'react-icons/bi'
import { BsQuestionLg } from 'react-icons/bs'
import { BsArrowDownCircle } from 'react-icons/bs'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Leftbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [suggest, setSuggest] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const getSuggest = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/allUsers")
                setSuggest(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getSuggest();
    }, []);

    return (
        <div className='leftBar'>
            <div className="leftBarWrapper">
                <ul className='leftBarList'>
                    <li className='leftBarItem'>
                        <MdGroups size='35px' />
                        <span className="leftBarSpan">Groups</span>
                    </li>
                    <li className='leftBarItem'>
                        <IoStorefront size='35px' />
                        <span className="leftBarSpan">Market place</span>
                    </li>
                    <li className='leftBarItem'>
                        <MdOutlineSmartDisplay size='35px' />
                        <span className="leftBarSpan">Watch</span>
                    </li>
                    <li className='leftBarItem'>
                        <GoCalendar size='35px' />
                        <span className="leftBarSpan">Events</span>
                    </li>
                    <li className='leftBarItem'>
                        <BiHealth size='35px' />
                        <span className="leftBarSpan">Health</span>
                    </li>
                    <li className='leftBarItem'>
                        <CgGames size='35px' />
                        <span className="leftBarSpan">Play Games</span>
                    </li>
                    <li className='leftBarItem'>
                        <BiSave size='35px' />
                        <span className="leftBarSpan">Saved</span>
                    </li>
                    <li className='leftBarItem'>
                        <BsQuestionLg size='35px' />
                        <span className="leftBarSpan">Quetions</span>
                    </li>
                </ul>
                <button className='leftBarButton'>
                    <BsArrowDownCircle size='30px' />
                    <span className='leftBarSpan'>See more</span>
                </button>
                <hr className='leftBarHr' />
                <h3 className='leftBarTitle'>Suggested Friends</h3>
                {
                    suggest.map((item) => {
                        return (
                            <Link key={item._id} to={`/profile/${item._id}`} style={{textDecoration: "none"}}>
                                {
                                user._id!==item._id?
                                    <div className="leftBarFriendsItem">
                                        <div className="friendsOnline">
                                            <img className='leftBarFriendsImg' src={item.profilePicture ? item.profilePicture : `${PF}profile/noAvatar.png`} alt="" />
                                        </div>
                                        <span className="friendsUserName">{item.username}</span>
                                    </div>
                                    :null
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};


export default Leftbar;