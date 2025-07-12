import React, {useReducer, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import api from "../services/api.js";
import AuthenticationInputsContainer from "../components/AuthenticationInputsContainer.jsx";
import MainContainer from "../components/MainContainer.jsx";
import {initialInputsDetails, inputsDetailsReducer} from "../reducers/inputsDetails.js";
import InputWithError from "../components/common/InputWithError.jsx";


const Authenticate = () => {
    const navigate = useNavigate();
    const [data, setData] = useSearchParams();
    const token = data.get("TOKEN");
    const [submitted, setSubmitted] = useState(false);
    const [input, dispatchInputsDetails] = useReducer(inputsDetailsReducer, initialInputsDetails);
    const [error, setError] = useState("");

    const handleReturn = () => navigate("/authorization");

    const handleAuthenticate = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        try {
            const body = new FormData();
            body.set("telephoneNumber", input.telephoneNumber.value);
            body.set("pin", input.pin.value);
            body.set("token", token);

            const response = await api.post("/users/authenticate", body);

            const {next, params} = response.data;
            const url = new URL(`http://localhost:5174${next}`);
            url.searchParams.append("TOKEN", token);
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
            window.location.href = url.toString();


        } catch (err) {
            console.error("Authentication failed:", err);
            if (err.response.status === 403) {
                const errorMessage = "Dados inválidos. Por favor, verifique o número de telefone e o PIN.";
                setError(errorMessage)
            }
        }
    };


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

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação:"}
            progress={50}
        >
            <form className={"dflxc g20 txt-center"} onSubmit={handleAuthenticate}>
                <AuthenticationInputsContainer
                    input={input}
                    setInput={dispatchInputsDetails}
                    submitted={submitted}
                />
                <InputWithError error={submitted ? error : ""} />
                <ButtonsContainer
                    className={buttonsDetails.className}
                    style={buttonsDetails.style}
                    handleReturn={handleReturn}
                    handleAdvance={() => {
                    }}
                    returnBtn={"voltar"}
                    advanceBtn={"autenticar"}
                    type={"submit"}
                />
            </form>

        </MainContainer>
    );
};

export default Authenticate;