import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import WarningMessage from "../components/common/WarningMessage/index.jsx";
import ProgressBar from "../components/common/ProgressBar/index.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";

const Authorization = () => {
    const navigate = useNavigate();
    const {originURL} = useLocation();
    const [firstStep, setFirstStep] = useState(true);

    const handleClick = {
        handleContinue: () => setFirstStep(false),
        handleAuthorize: () => navigate("/authenticate"),
        handleReturn: () => navigate(originURL)
    };

    const className = {
        return: {
            container: "dflx g10 pt-sans-bold blue-autGov",
            button: "btn-grey-main",
            arrow: "arrow-blue"
        },
        advance: {
            container: "dflx g10 pt-sans-bold white-autGov",
            button: "btn-blue-main",
            arrow: "arrow-white"
        }

    };

    const style = {
        h2: {
            margin: 0,
        }
    };

    return (
        <>
            <WarningMessage/>
            {/*<ProgressBar progress={30}/>*/}

            <ButtonsContainer
                className={className}
                style={style}
                handleReturn={handleClick.handleReturn}
                handleAdvance={firstStep ? handleClick.handleContinue : handleClick.handleAuthorize}
                returnBtn={"voltar"}
                advanceBtn={firstStep ? "continuar" : "autorizar"}
                />
        </>
    );
};

export default Authorization;