import React, {useEffect, useReducer, useRef, useState} from 'react';
import MainContainer from "../components/MainContainer.jsx";
import CodeValidationContainer from "../components/CodeValidationContainer.jsx";
import CodeCountDown from "../components/ModalContainer/CodeCountDown.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import api from "../services/api.js";
import ModalContainer from "../components/ModalContainer/index.jsx";
import { initialInputsDetails, inputsDetailsReducer } from "../reducers/inputsDetails.js";
import { validateTelephoneNumber, validatePin } from '../utils/inputUtils.js';
import useIsTabActive from "../hooks/useIsTabActive.jsx";
import InputWithError from "../components/common/InputWithError.jsx";


const CodeValidation = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [input, dispatchInputs] = useReducer(inputsDetailsReducer, initialInputsDetails);
    const [error, setError] = useState("");
    const [data, setData] = useSearchParams();
    const token = data.get("TOKEN");


    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const handleReturn = () => navigate("/authentication");

    const handleCodeValidation = async () => {
        const codeError = input.code.value ? '' : 'Campo obrigatório';
        dispatchInputs({ type: 'SET_CODE', payload: { value: input.code.value, error: codeError } });

        if (codeError) return;

        try {
            const body = new FormData();
            body.set("SMSCode", input.code.value);
            body.set("token", token);

            const response = await api.post("/users/verify-smscode", body);

            if (response.status === 200) {
                window.location.href = `http://localhost:5173/auth-with-token?TOKEN=${data.get("TOKEN")}`;
            }

        } catch (err) {
            console.error(err);
            if (err.response.status === 403) {
                const errorMessage = "Código inválido. Por favor, verifique o código enviado.";
                setError(errorMessage)
            }
        }
    };

    useEffect(() => {
        handleOpenModal();
    }, []);

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação:"}
            progress={70}
        >

            <CodeValidationContainer
                input={input}
                setInput={dispatchInputs}
            />
            <InputWithError error={error ? error : ""} />
            <CodeCountDown
                token={token}
            />
            <ButtonsContainer
                returnBtn={"voltar"}
                handleReturn={handleReturn}
                advanceBtn={"autenticar"}
                handleAdvance={handleCodeValidation}
            />
            <ModalContainer open={open} handleCloseModal={handleCloseModal} data={data}/>
        </MainContainer>
    );
};

export default CodeValidation;