import React, { useState } from 'react';
import "./profileEdit.css"
import { FaEdit } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
// import axios from 'axios';
// import { AuthContext } from "../../context/AuthContext";
// import { useParams } from 'react-router-dom';

const ProfileEdit = () => {

    const [modal, setModal] = useState(false);
    // const { user } = useContext(AuthContext);
    // const { id } = useParams();

    // console.log(id)
    const handleModal = () => {
        setModal(!modal);
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
                                <input type="file" />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>Username:</label>
                                <input className='editInput' type="text" name='username' />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>Desc:</label>
                                <textarea className='editTextArea' rows="3" name='desc' ></textarea>
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>City:</label>
                                <input className='editInput' type="text" name='city' />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>From:</label>
                                <input className='editInput' type="text" name='from' />
                            </div>
                            <div className="form-group">
                                <label className='editLabel'>Relationship:</label>
                                <input className='editInput' type="text" name='relationship' />
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