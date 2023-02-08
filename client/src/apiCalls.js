import axios from "axios";

export const loginCall = async(userCredentials, dispatch) =>{
    dispatch({ type: "lOGIN-START" });
    try{
        const res = await axios.post("http://localhost:8000/api/user/login", userCredentials);
        dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
    }catch(err){
        dispatch({ type:"LOGIN_FAILURE", payload: err });
        console.log(err);
    }
}