import React, { useContext, useRef, useState } from 'react';
import './share.css'
import { RiLiveLine } from 'react-icons/ri'
import { TbPhoto } from 'react-icons/tb'
import { BsFillEmojiLaughingFill } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    // console.log('here is file MF', file);
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            if(file){
                try{
                    const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dxubl5vem/image/upload", data);
                    const { url } = uploadRes.data;
                    const newPostWithImg = {
                        userId: user._id,
                        desc: desc.current.value,
                        img: url
                    }
                    await axios.post("http://localhost:8000/api/post/new", newPostWithImg);
                    window.location.reload();
                }catch(err){
                    console.log(err);
                }
            }else{
                const newPost = {
                    userId: user._id,
                    desc: desc.current.value,
                }
                await axios.post("http://localhost:8000/api/post/new", newPost);
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='share'>
            <form className="shareWrapper" onSubmit={submitHandler}>
                <div className="shareTop">
                    <img src={user.profilePicture? user.profilePicture : `${PF}profile/noAvatar.png`} alt="profile pic" className='sharePic' />
                    <textarea placeholder={`What's on your mind, ${user.username}?`} type="text" className='shareInput' ref={desc}></textarea>
                </div>
                <hr className='shareHr' />
                {file && (
                    <div className="shareImgContainer">
                        <img className='shareImgTemp' src={URL.createObjectURL(file)} alt="" />
                        <MdOutlineCancel className='cancelImg' onClick={() => { setFile(null) }} />
                    </div>
                )}
                <div className="shareBottom">
                    <div className="shareOptions">
                        <RiLiveLine size="32px" color='red' />
                        <span className="shareOptionSpan">Live video</span>
                    </div>
                    <label htmlFor='file' className="shareOptions">
                        <TbPhoto size="32px" color='green' />
                        <span className="shareOptionSpan">Photo/video</span>
                        <input style={{ display: 'none' }} type="file" id='file' onChange={(e) => setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOptions">
                        <BsFillEmojiLaughingFill size="32px" color='#CCCC00' />
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