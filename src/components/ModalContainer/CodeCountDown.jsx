import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import useIsTabActive from "../../hooks/useIsTabActive.jsx";
import api from "../../services/api.js";

const CodeCountDown = ({token}) => {
    const navigate = useNavigate();
    const [time, setTime] = useState();
    const isTabActive = useIsTabActive();

    const handleTimer = async () => {
        try {
            const response = await api.get("/users/sms-code-time-left", {
                params: {
                    token: token
                }
            });
            if (response?.status === 200) {
                setTime(response?.data);
            }

        } catch (error) {
            console.error("Error fetching SMS code time left:", error);
        }
    };

    useEffect(() => {
        if (isTabActive) {
            handleTimer();
        }
    }, [isTabActive]);


    useEffect(() => {
        if (time <= 0) navigate("/authorization", {replace: true});

        const timeout = setTimeout(() => {
            setTime(prevState => prevState - 1);

        }, 1000);

        return () => clearTimeout(timeout);
    }, [time]);

    return (
        <div>
            <p>{`Este código tem a duração de ${time} segundos.`}</p>
        </div>
    );
};

export default CodeCountDown;