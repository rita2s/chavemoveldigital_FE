import React, {useState, useReducer} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import api from "../services/api.js";
import AuthenticationInputsContainer from "../components/AuthenticationInputsContainer.jsx";
import MainContainer from "../components/MainContainer.jsx";
import {initialInputsDetails, inputsDetailsReducer} from "../reducers/inputsDetails.js";
import { validateTelephoneNumber, validatePin, formatTelephoneNumberForSubmission } from '../utils/inputUtils.js';


const Authenticate = () => {
    const navigate = useNavigate();
    const [data, setData] = useSearchParams();
    const [submitted, setSubmitted] = useState(false);
    const [input, dispatchInputsDetails] = useReducer(inputsDetailsReducer, initialInputsDetails);

    const handleReturn = () => navigate("/authorization");

    const handleAuthenticate = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Validate all fields on submit
        const telError = validateTelephoneNumber(input.telephoneNumber.value);
        const pinError = validatePin(input.pin.value);
        dispatchInputsDetails({ type: 'SET_TELEPHONE_NUMBER', payload: { value: input.telephoneNumber.value, error: telError } });
        dispatchInputsDetails({ type: 'SET_PIN', payload: { value: input.pin.value, error: pinError } });

        if (telError || pinError) return;

        let telephoneNumberToSend = formatTelephoneNumberForSubmission(input.telephoneNumber.value);

        try {
            const body = new FormData();
            body.set("telephoneNumber", telephoneNumberToSend);
            body.set("pin", input.pin.value)

            await api.post("/users/authenticate", body)
                .then(response => {
                    const { next, params } = response.data;
                    const url = new URL(`http://localhost:5174${next}`);
                    url.searchParams.append("TOKEN", data.get("TOKEN"));
                    Object.entries(params).forEach(([key, value]) => {
                        url.searchParams.append(key, value);
                    });
                    window.location.href = url.toString();
                })
                .catch(error => {
                    console.error("Auth failed", error);
                });

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

    return (
        <MainContainer
            className={"dflxc g20"}
            title={"faça a sua autenticação:"}
            progress={50}
        >
            <form className={"dflxc g20"} onSubmit={handleAuthenticate}>
                <AuthenticationInputsContainer
                    input={input}
                    setInput={dispatchInputsDetails}
                    submitted={submitted}
                />
                <ButtonsContainer
                    className={buttonsDetails.className}
                    style={buttonsDetails.style}
                    handleReturn={handleReturn}
                    handleAdvance={() => {}}
                    returnBtn={"voltar"}
                    advanceBtn={"autenticar"}
                    type={"submit"}
                />
            </form>

        </MainContainer>
    );
};

export default Authenticate;