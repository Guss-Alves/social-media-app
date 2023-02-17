import React, { useState, useRef, useContext } from 'react';
import "./profileEdit.css"
import { FaEdit } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import { useParams } from 'react-router-dom';
import { TbPhoto } from 'react-icons/tb'

const ProfileEdit = ({userInfo}) => {

    const [modal, setModal] = useState(false);
    const [file, setFile] = useState(null);
    const userName = useRef()
    const desc = useRef()
    const city = useRef()
    const from = useRef()
    const relationship = useRef()
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const handleModal = () => {
        setModal(!modal);
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try{
            if(file){
                try{
                    const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dxubl5vem/image/upload", data);
                    const { url } = uploadRes.data;
                    const newInfoWithPic = {
                        userId: user._id,
                        profilePicture: url,
                        username: userName.current.value,
                        desc: desc.current.value,
                        city: city.current.value,
                        from: from.current.value,
                        relationship: relationship.current.value
                    }
                    await axios.put(`http://localhost:8000/api/user/${id}`, newInfoWithPic);
                    window.location.reload();
                }catch(err){
                    console.log(err);
                }
                }else{
                    const newInfo = {
                        userId: user._id,
                        username: userName.current.value,
                        desc: desc.current.value,
                        city: city.current.value,
                        from: from.current.value,
                        relationship: relationship.current.value,
                        profilePicture: userInfo.profilePicture
                    }
                    await axios.put(`http://localhost:8000/api/user/${id}`, newInfo);
                    window.location.reload();
                }
            }catch(err){
                console.log(err);
            }
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const statusOptions = [
        "choose one below",
        "Single",
        "Married",
        "Complicated"
    ]

    return (
        <div>
            <button onClick={handleModal} className='btnEdit'>
                <span>Edit profile</span>
                <FaEdit />
            </button>
            {
                modal && (
                    <form onSubmit={submitHandler} className="modal">
                        <div onClick={handleModal} className="overlay"></div>
                        <div  className="modal-content">
                            <h1 style={{color:"#1877f2"}}>Profile Info</h1>
                            <button onClick={handleModal} className='close-modal'><MdOutlineCancel/></button>
                            <div className="form-group">
                                <label className='editLabel'>Profile picture:</label>
                                <label htmlFor="fileEdit"><TbPhoto className='editIcon'/></label>
                                <input style={{ display: 'none' }} type="file" id='fileEdit' onChange={(e) =>setFile(e.target.files[0])} value={''} />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>Username:</label>
                                <input className='editInput' type="text" name='username' ref={userName} defaultValue={userInfo.username} />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>Description:</label>
                                <textarea className='editTextArea' rows="3" name='desc' ref={desc} defaultValue={userInfo.desc} ></textarea>
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>City:</label>
                                <input className='editInput' type="text" name='city' ref={city} defaultValue={userInfo.city} />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>From:</label>
                                <input className='editInput' type="text" name='from' ref={from} defaultValue={userInfo.from}  />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>Relationship:</label>
                                {/* <input className='editInput' type="text" name='relationship' ref={relationship} defaultValue={userInfo.relationship} /> */}
                                <select name="relationship" className='editInput' ref={relationship} defaultValue={userInfo.relationship} >
                    {
                        statusOptions.map((cat, i) => {
                            return <option key={i} value={cat}>{cat}</option>
                        })
                    }
                </select>
                            </div>
                            <div className="save">
                                <div></div>
                                <button className='shareOptionButton' type='submit'>Save</button>
                            </div>
                        </div>
                    </form>
                )
            }
        </div>
    );
};

export default ProfileEdit;