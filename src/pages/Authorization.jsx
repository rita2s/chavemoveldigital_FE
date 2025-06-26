import React, {useState} from 'react';
import Button from "../components/common/Button/index.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const Authorization = () => {
    const navigate = useNavigate();
    const {originURL} = useLocation();
    const [firstStep, setFirstStep] = useState(true);

    const handleClick ={
        handleContinue: setFirstStep(false),
        handleAuthorize: () => navigate("/authenticate"),
        handleReturn: () => navigate(originURL)
    };

    const className = {
        container: "dflx g10 pt-sans-bold",
    };

    const style = {
        h2: {
            margin: 0,
        }
    };

    return (
        <div className={"dflx g20"}>
            <Button
                className={{
                    container: `${className.container} blue-autGov`,
                    button: "btn-grey-main",
                    arrow: "arrow-blue"
                }}
                style={style}
                btnType={"button"}
                btnValue={"voltar"}
                handleClick={handleClick.handleReturn}
            />
            <Button
                className={{
                    container: `${className.container} white-autGov`,
                    button: "btn-blue-main",
                    arrow: "arrow-white"
                }}
                style={style}
                btnType={"button"}
                btnValue={"continuar"}
                handleClick={handleClick.handleContinue}
            />
        </div>
    );
};

export default Authorization;