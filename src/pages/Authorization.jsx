import React, {useState} from 'react';
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import CompAutMethod from "../components/CompAutMethod.jsx";
import "../components/compStyle.css"
import MainContainer from "../components/MainContainer.jsx";


// First page
const Authorization = () => {

    const [selected, setSelectedMethod] = useState({
        authMethod: "cmd",
        personalMethod: "sms"
    });

    const navigate = useNavigate();
    const {state} = useLocation();
    const [firstStep, setFirstStep] = useState(true);
    const [param, SetParam] = useSearchParams();

    const handleClick = {
        handleContinue: () => {
            const validAuth = selected.authMethod === "cmd";
            const validPersonal = selected.personalMethod === "sms";

            if (validAuth && validPersonal) {
                setFirstStep(false);
            } else {
                navigate("/unavailable");
            }
        },
        handleAuthorize: () => {
            navigate(`/authentication?TOKEN=${param.get("TOKEN")}`)
        },
        handleReturn: () => navigate(state?.originURL || "/")
    };

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação com:"}
            progress={firstStep ? 0 : 30}
        >
            <CompAutMethod firstStep={firstStep} selected={selected} setSelectedMethod={setSelectedMethod} />
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