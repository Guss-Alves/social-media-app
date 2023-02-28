import React, { useRef } from 'react';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("http://localhost:8000/api/user/new", user);
                navigate('/');
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className='Reg'>
            <div className="RegWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Gusbook</h3>
                    <span className="loginDesc">Connect with friends, family and other people you know. Share your lifestyle with the world around you.</span>
                </div>
                <div className="loginRight">
                    <form className="RegBox" onSubmit={handleClick}>
                        <input placeholder='Username' required ref={username} type="text" className="loginInput" />
                        <input placeholder='Email' required ref={email} type="email" className="loginInput" />
                        <input placeholder='Password' required ref={password} type="password" className="loginInput" minLength="6" />
                        <input placeholder='Confirm password' required ref={passwordAgain} type="password" className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <hr />
                        <Link to={"/"} style={{ display: "flex", justifyContent: "center", textDecoration: "none" }}>
                            <button className="loginRegisterButton">Log into account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Register;