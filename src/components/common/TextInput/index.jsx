import React from 'react';

const TextInput = ({input, setInput, label, type, className, style}) => {
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
                value={input.value}
                onChange={(e) => setInput(e.target.value)}
            />
        </>
    );
};

export default TextInput;