import React from 'react';
import './register.css'
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Gusbook</h3>
                    <span className="loginDesc">Connect with friends, family and other people you know. Share your lifestyle with the world around you.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' type="text" className="loginInput" />
                        <input placeholder='Email' type="text" className="loginInput" />
                        <input placeholder='Password' type="text" className="loginInput" />
                        <input placeholder='Confirm password' type="text" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <hr />
                        <Link to={"/login"} style={{display:"flex",justifyContent:"center", textDecoration:"none"}}>
                            <button className="loginRegisterButton">Log into account</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;