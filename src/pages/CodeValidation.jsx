import React, {useEffect, useState} from 'react';
import MainContainer from "../components/MainContainer.jsx";
import CodeValidationContainer from "../components/CodeValidationContainer.jsx";
import CodeCountDown from "../components/ModalContainer/CodeCountDown.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import api from "../services/api.js";
import ModalContainer from "../components/ModalContainer/index.jsx";

const CodeValidation = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useSearchParams();
    const delay = data.get("delay");
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        code: "",
    });

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleReturn = () => navigate("/authentication");

    const handleCodeValidation = async () => {
        try {
            const body = new FormData();
            body.set("SMSCode", input.code);
            body.set("token", data.get("TOKEN"));

            const response = await api.post("/users/verify-smscode", body);

            if (response.status === 200) {
                window.location.href = `http://localhost:5173/auth-with-token?TOKEN=${data.get("TOKEN")}&ID=${response.data}`;
            }

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        handleOpenModal();
    }, []);

    const inputsDetails = {
        title: "chave móvel digital",
        code: {
            label: "Código de Validação",
            type: "text",
            name: "code",
            value: input.code
        },
    };

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
            <CodeCountDown delay={delay}/>
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