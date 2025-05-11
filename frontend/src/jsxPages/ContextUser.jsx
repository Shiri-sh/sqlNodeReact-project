import { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import fetchData from "../service/FetchData";

export const ContextUser = createContext();
const ContextUserProvider = ({children}) => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
     const resetUser = () => {localStorage.setItem("currentUser", ""); setUser({})};

    useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const idExist = JSON.parse(currentUser);
        fetchUserDetails(idExist);
    } else {
        navigate('/login');
    }
}, []);
    const fetchUserDetails = async (idExist) => {
        try {
            const DatailsUser = await fetchData(`users/${idExist}`);
            setUser(DatailsUser);
            console.log(DatailsUser);
        } catch (error) {
            navigate('/login');
            alert(error);
        }
    };
    return (
        <ContextUser.Provider value={{user, setUser,resetUser}}>
            {children}
        </ContextUser.Provider>
    );
}
export default ContextUserProvider;


