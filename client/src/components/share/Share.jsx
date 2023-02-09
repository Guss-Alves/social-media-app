import React, {useContext, useRef, useState } from 'react';
import './share.css'
import {RiLiveLine} from 'react-icons/ri'
import {TbPhoto} from 'react-icons/tb'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dxubl5vem/image/upload", data);
            const {url} = uploadRes.data;
            const newPost={
                userId: user._id,
                desc: desc.current.value,
                img: url
            }
            await axios.post("http://localhost:8000/api/post/new", newPost);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }
    
    return (
        <div className='share'>
            <form className="shareWrapper" onSubmit={submitHandler}>
                <div className="shareTop">
                    <img src={user.profilePicture? PF+ user.profilePicture :`${PF}profile/profile4.jpg`} alt="profile pic" className='sharePic' />
                    <input placeholder={`What's on your mind, ${user.username}?`} type="text" className='shareInput' ref={desc} />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <RiLiveLine size="32px" color='red'/>
                        <span className="shareOptionSpan">Live video</span>
                    </div>
                    <label htmlFor='file' className="shareOptions">
                        <TbPhoto size="32px" color='green'/>
                        <span className="shareOptionSpan">Photo/video</span>
                        <input style={{display:'none'}} type="file" id='file' onChange={(e) => setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOptions">
                        <BsFillEmojiLaughingFill size="32px" color='#CCCC00'/>
                        <span className="shareOptionSpan">Felling/activity</span>
                    </div>
                    <div className="shareOptionsPost">
                        <button className='shareOptionButton' type='submit'>Share</button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default Share;