import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const CodeCountDown = ({delay}) => {
    const navigate = useNavigate();
    const [time, setTime] = useState(delay ?? 60000);

    useEffect(() => {
        if (time <= 0) navigate("/authorization");

        const timeout = setTimeout(() => {
            setTime(time - 1);

            return clearTimeout(timeout)
        }, 1000);
    }, [time]);

    return (
        <div>
            <p>{`Este código tem a duração de ${time} segundos.`}</p>
        </div>
    );
};

export default CodeCountDown;