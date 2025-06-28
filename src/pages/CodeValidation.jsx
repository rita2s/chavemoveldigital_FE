import React, {useState} from 'react';
import MainContainer from "../components/MainContainer.jsx";
import CodeValidationContainer from "../components/CodeValidationContainer.jsx";
import CodeCountDown from "../components/ModalContainer/CodeCountDown.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import api from "../services/api.js";

const CodeValidation = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        code: "",
    });

    const handleReturn = () => navigate("/authentication");

    const handleCodeValidation = () => {
        try {
            const body = new FormData();
            body.set("code", input.code)

            const {data} = api.post("http://localhost:9090/authenticate/code", body);

            console.log(data);

        } catch (e) {
            console.error(e);
        }
    };


    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação:"}
            progress={10}
        >
            <CodeValidationContainer input={input} setInput={setInput}/>
            <CodeCountDown delay={state?.delay}/>
            <ButtonsContainer
                advanceBtn={"voltar"}
                handleAdvance={handleCodeValidation}
                handleReturn={handleReturn}
                returnBtn={"autenticar"}
            />
        </MainContainer>
    );
};

export default CodeValidation;