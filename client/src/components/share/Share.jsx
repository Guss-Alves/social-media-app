import React from 'react';
import './share.css'
import {RiLiveLine} from 'react-icons/ri'
import {TbPhoto} from 'react-icons/tb'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={`${PF}profile/profile4.jpg`} alt="profile pic" className='sharePic' />
                    <input placeholder="What's on your mind ..." type="text" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <RiLiveLine size="32px" color='red'/>
                        <span className="shareOptionSpan">Live video</span>
                    </div>
                    <div className="shareOptions">
                        <TbPhoto size="32px" color='green'/>
                        <span className="shareOptionSpan">Photo/video</span>
                    </div>
                    <div className="shareOptions">
                        <BsFillEmojiLaughingFill size="32px" color='#CCCC00'/>
                        <span className="shareOptionSpan">Felling/activity</span>
                    </div>
                    <div className="shareOptionsPost">
                        <button className='shareOptionButton'>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Share;