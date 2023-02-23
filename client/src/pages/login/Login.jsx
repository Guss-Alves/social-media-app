import React, {useRef, useContext, useState} from 'react';
import './login.css'
import { Link } from 'react-router-dom';
// import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { dispatch } = useContext(AuthContext);
    const [formError, setFormError] = useState(null);


    const handleClick = async (e) => {
        e.preventDefault();
        const userCredentials = {
            email: email.current.value, 
            password: password.current.value
        }
        try{
            const res = await axios.post("http://localhost:8000/api/user/login", userCredentials);
                dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
        }catch(err){
            dispatch({ type:"LOGIN_FAILURE", payload: err });
            console.log(err);
            setFormError("We do not recognize your Email and/or Password. Please try again.");
        }
    }

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     loginCall(
    //         { email: email.current.value, password: password.current.value },
    //         dispatch
    //     );
    // }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Gusbook</h3>
                    <span className="loginDesc">Connect with friends, family and other people you know. Share your lifestyle with the world around you.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        {
                        formError?
                            <p className='loginError'>{formError}</p>
                            :null
                        }
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