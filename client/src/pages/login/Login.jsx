import React, {useRef, useContext} from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
// import { useNavigate } from "react-router-dom";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, dispatch } = useContext(AuthContext);

    // const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
        // navigate('/')
    }
    console.log(user);

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Gusbook</h3>
                    <span className="loginDesc">Connect with friends, family and other people you know. Share your lifestyle with the world around you.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input required placeholder='Email' type="email" className="loginInput" ref={email}/>
                        <input required placeholder='Password' type="password" className="loginInput" ref={password} minLength="6" />
                        <button className="loginButton" >Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <hr />
                        <Link to={"/register"} style={{ display: "flex", justifyContent: "center", textDecoration: "none" }}>
                            <button className="loginRegisterButton">Create new account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login;