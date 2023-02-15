import React, { useState } from 'react';
import "./profileEdit.css"
import { FaEdit } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'

const ProfileEdit = () => {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
        // console.log(modal);
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
                    <div className="modal">
                        <div onClick={handleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>here gonna be updates hehe</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt magni ab maiores aperiam blanditiis impedit ducimus commodi autem nisi! Assumenda accusantium eos tempora tempore. Asperiores veniam voluptates cupiditate qui repellat!</p>
                            <button onClick={handleModal} className='close-modal'><MdOutlineCancel/></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProfileEdit;