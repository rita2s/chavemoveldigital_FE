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

    const handleCodeValidation = async () => {
        try {
            const body = new FormData();
            body.set("code", input.code)

            const {data} = await api.post("/authenticate/code", body);

        } catch (e) {
            console.error(e);
        }
    };

    const inputsDetails = {
        title: "chave móvel digital",
        code: {
            label: "Número de Telemóvel",
            type: "text",
            name: "code",
            value: input.code
        },
    }

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação:"}
            progress={70}
        >
            <CodeValidationContainer
                input={input}
                setInput={setInput}
                inputsDetails={inputsDetails}
            />
            <CodeCountDown delay={state?.delay}/>
            <ButtonsContainer
                advanceBtn={"autenticar"}
                handleAdvance={handleCodeValidation}
                handleReturn={handleReturn}
                returnBtn={"voltar"}
            />
        </MainContainer>
    );
};

export default CodeValidation;