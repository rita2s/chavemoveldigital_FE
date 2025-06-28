import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import CompAutMethod from "../components/CompAutMethod.jsx";
import "../components/compStyle.css"
import MainContainer from "../components/MainContainer.jsx";


// First page
const Authorization = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [firstStep, setFirstStep] = useState(true);

    const handleClick = {
        handleContinue: () => setFirstStep(false),
        handleAuthorize: () => {
            navigate("/authenticate")
        },
        handleReturn: () => navigate(state?.originURL)
    };

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação com:"}
            progress={10}
        >
            <CompAutMethod firstStep={firstStep}/>
            <ButtonsContainer
                handleReturn={handleClick.handleReturn}
                handleAdvance={firstStep ? handleClick.handleContinue : handleClick.handleAuthorize}
                returnBtn={"voltar"}
                advanceBtn={firstStep ? "continuar" : "autorizar"}
                />
        </MainContainer>
    );
};

export default Authorization;