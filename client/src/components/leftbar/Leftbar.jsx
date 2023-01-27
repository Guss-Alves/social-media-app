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
            </div>
        </div>
    );
};


export default Leftbar;