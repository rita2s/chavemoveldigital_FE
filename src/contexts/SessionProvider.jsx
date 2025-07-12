import {useEffect, useState} from "react";
import api from "../services/api.js";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {SessionContext} from "./SessionContext.js";


const UserProvider = ({children}) => {
    const {token} = useSearchParams();

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();




    return (
        <SessionContext.Provider value={{token: token, loading}}>
            {loading ? <div>Loading</div> : children}
        </SessionContext.Provider>
    );
};

export default UserProvider;