import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import WarningMessage from "../components/common/WarningMessage/index.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import api from "../services/api.js";
import {Modal} from "@mui/material";
import ModalContainer from "../components/ModalContainer/index.jsx";

const Authenticate = () => {
    const navigate = useNavigate();
    const {targetURL} = useLocation();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [credentials, setCredentials] = useState({
        telephoneNumber: "",
        pin: 0,
    });

    const handleOpenModal = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleReturn = () => navigate("/authorization");

    const handleAuthenticate = (e) => {
        e.preventDefault();

        try {
            const body = new FormData();
            body.set("telephoneNumber", credentials.telephoneNumber)
            body.set("pin", credentials.pin)

            const {data} = async () => await api.post("/authenticate", body)

            setData(data)
            handleOpenModal()

        } catch (e) {
            console.error("Authentication failed:", e);
            return;
        }
        navigate(targetURL);
    }


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
            {/*Inputs*/}
            <ButtonsContainer
                className={className}
                style={style}
                handleReturn={handleReturn}
                handleAdvance={handleAuthenticate}
                returnBtn={"voltar"}
                advanceBtn={"autenticar"}
            />
            <ModalContainer open={open} handleClose={handleClose} data={data}/>
        </>
    );
};

export default Authenticate;