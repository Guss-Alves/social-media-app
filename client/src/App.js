import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import {
    Routes,
    Route,
    redirect
} from 'react-router-dom'
import {useContext} from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Routes>
                <Route exact path="/" element={user ? <Home/> : <Login/>}/>
                <Route exact path="/login" element={user? redirect("/") : <Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/profile/:id" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;
