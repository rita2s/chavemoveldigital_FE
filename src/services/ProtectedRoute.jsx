import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import api from "./api.js";

const ProtectedRoute = ({children}) => {
    const [data, setData] = useSearchParams();
    const tokenInURI = data.get("TOKEN");
    const navigate = useNavigate();
    const handleCheckToken = async () => {
        try {
            const response = await api.get(`/oauth/token?token=${tokenInURI}`);
            if (!response.data) {
                console.error("Token is invalid or expired, redirecting to authentication page");
                navigate("/unavailable", {replace: true});
            }

        } catch (e) {
            console.error("Token validation failed:", e);

        }
    };

    useEffect(() => {
        handleCheckToken();
        if (!tokenInURI || tokenInURI === "NULL" || tokenInURI === "null") {
            console.error("No token found in URI, redirecting to authentication page");
            navigate("/unavailable", {replace: true});
        }
    }, []);

    return children;
};

export default ProtectedRoute;