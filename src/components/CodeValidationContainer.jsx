import React from 'react';
import TextInput from "./common/TextInput/index.jsx";

const CodeValidationContainer = ({input, setInput, submitted}) => {
    const style = {};
    const className = {};

    // Handler for reducer-based input
    const handleInputChange = (e) => {
        const { value } = e.target;
        // Only one field: code
        setInput({ type: 'SET_CODE', payload: { value, error: value ? '' : 'Campo obrigatório' } });
    };

    return (
        <>
            <h3>CHAVE MÓVEL DIGITAL</h3>
            <TextInput
                input={input.code}
                setInput={handleInputChange}
                style={style}
                className={className}
                submitted={submitted}
            />
        </>
    );
};

export default CodeValidationContainer;