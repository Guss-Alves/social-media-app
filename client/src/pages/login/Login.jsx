import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Gusbook</h3>
                    <span className="loginDesc">Connect with friends, family and other people you know. Share your lifestyle with the world around you.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' type="text" className="loginInput" />
                        <input placeholder='Password' type="text" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <hr />
                        <button className="loginRegisterButton">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;