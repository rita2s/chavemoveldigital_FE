import React from 'react';

const TextInput = ({input, setInput, inputDetails, className, style}) => {
    const {type, label, name, value} = inputDetails;

    return (
        <>
            <label
                htmlFor={`input-${type}`}
                className={className.label}
                style={style.label}
            >{label}</label>
            <input
                type={type}
                id={`input-${type}`}
                className={className.input}
                style={style.input}
                name={name}
                value={value}
                onChange={(e) => {
                    setInput({
                        ...input,
                        [e.target.name]: e.target.value
                    })
                }}
            />
        </>
    );
};

export default TextInput;