import React, { useState, useEffect, useContext } from 'react';
import './home.css'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';

const Home = () => {
    const [userInfo, setUserInfo] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8000/api/user/${user._id}`)
            // console.log('res dos posts',res);
            setUserInfo(res.data);
        };
        fetchUser();
    }, [user._id]);


    return (
        <div>
            <>
                <Topbar userInfo={userInfo} />
                <div className="homeContainer">
                    <Leftbar />
                    <Feed userInfo={userInfo} />
                    <Rightbar />
                </div>
            </>
        </div>
    );
};


export default Home;