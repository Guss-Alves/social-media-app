import React, { useState } from 'react';
import "./postDelete.css"
import { MdOutlineCancel } from 'react-icons/md'
// import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';

const PostDelete = ({post}) => {

    const [modal, setModal] = useState(false);
    // const { user } = useContext(AuthContext);

    // console.log(post._id);
    // console.log(user._id);
    const handleModal = () => {
        setModal(!modal);
    }
    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/delete/post/${post._id}`)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => {
                console.log('something went wrong -->', err)
            })
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            <span onClick={handleModal} className='btnDelete'>
                <MdOutlineCancel />
            </span>
            {modal && (
                <div className="modal">
                    <div onClick={handleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Alert</h2>
                        <p>
                            Are you sure you want to delete this post ?
                        </p>
                        <button className="close-delete" onClick={handleModal}>
                            Cancel
                        </button>
                        <button onClick={handleDelete} className="deletePostBtn">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostDelete;