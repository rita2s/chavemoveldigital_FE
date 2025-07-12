import React from 'react';
import TextInput from "./common/TextInput/index.jsx";
import { validateTelephoneNumber, validatePin, formatTelephoneNumberForSubmission } from '../utils/inputUtils.js';

const AuthenticationInputsContainer = ({input, setInput, submitted}) => {
    const {telephoneNumber, pin} = input;
    const style = {};
    const className = {};


    const handleInputChange = (e) => {
        let { name, value } = e.target;
        if (name === "telephoneNumber") {
            const error = validateTelephoneNumber(value);
            value = formatTelephoneNumberForSubmission(value);
            setInput({
                type: 'SET_TELEPHONE_NUMBER',
                payload: { value, error }
            });
            if (!error) return;

        } else if (name === "pin") {
            const error = validatePin(value);
            setInput({
                type: 'SET_PIN',
                payload: { value, error }
            });
            if (!error) return;
        }

    };

    return (
        <div className={"dflxc comp-aut-method"}>
            <h3>{input.title.toUpperCase()}</h3>
            <div className={"dflxc g10"}>
                <TextInput
                    input={telephoneNumber}
                    setInput={handleInputChange}
                    style={style}
                    className={className}
                    submitted={submitted}
                />
                <TextInput
                    input={pin}
                    setInput={handleInputChange}
                    style={style}
                    className={className}
                    submitted={submitted}
                />
            </div>
        </div>
    );
};

export default AuthenticationInputsContainer;