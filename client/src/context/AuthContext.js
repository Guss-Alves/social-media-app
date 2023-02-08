import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "63d0660e5695830c1e0d9c5f",
        username: "jane",
        email: "jane@gmail.com",
        profilePicture: "profile/profile2.jpg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: [],
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(state.user))
    // }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    );
};