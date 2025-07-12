import React from 'react';
import InputWithError from "../InputWithError.jsx";

const TextInput = ({ setInput, input, className, style, submitted }) => {
    const { type, label, name, value, error } = input;

    return (
        <>
            <label
                htmlFor={`input-${name}`}
                className={className.label}
                style={style.label}
            >{label}</label>
            <input
                type={type}
                id={`input-${name}`}
                className={className.input}
                style={style.input}
                name={name}
                value={value || ""}
                onChange={(e) => setInput(e)}
            />
            <InputWithError error={submitted ? error : ""} />
        </>
    );
};

export default TextInput;