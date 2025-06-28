import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import WarningMessage from "../components/common/WarningMessage/index.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import api from "../services/api.js";
import ModalContainer from "../components/ModalContainer/index.jsx";
import AuthenticationInputsContainer from "../components/AuthenticationInputsContainer.jsx";
import ProgressBar from "../components/common/ProgressBar/index.jsx";
import MainContainer from "../components/MainContainer.jsx";

const Authenticate = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [input, setInput] = useState({
        telephoneNumber: "",
        pin: 0,
    });

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleReturn = () => navigate("/authorization");

    const handleAuthenticate = (e) => {
        e.preventDefault();

        try {
            const body = new FormData();
            body.set("telephoneNumber", input.telephoneNumber)
            body.set("pin", input.pin)

            const {data} = async () => await api.post("http://localhost:9090/authenticate", body)
            console.log("data: ", data);

            setData(data)
            handleOpenModal()

        } catch (e) {
            console.error("Authentication failed:", e);
            return;
        }
    }

    const buttonsDetails = {
        className: {
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
        },
        style: {
            h2: {
                margin: 0,
            }
        }
    };

    const inputsDetails = {
        title: "chave móvel digital",
        telephoneNumber: {
            label: "Número de Telemóvel",
            type: "text"
        },
        pin: {
            label: "Inserir PIN",
            type: "password"
        },
    }

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação:"}
            progress={30}
        >
            <AuthenticationInputsContainer
                input={input}
                setInput={setInput}
                inputsDetails={inputsDetails}
            />
            <ButtonsContainer
                className={buttonsDetails.className}
                style={buttonsDetails.style}
                handleReturn={handleReturn}
                handleAdvance={handleAuthenticate}
                returnBtn={"voltar"}
                advanceBtn={"autenticar"}
            />
            <ModalContainer open={open} handleCloseModal={handleCloseModal} data={data}/>
        </MainContainer>
    );
};

export default Authenticate;