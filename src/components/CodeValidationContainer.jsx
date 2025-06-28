import React from 'react';
import TextInput from "./common/TextInput/index.jsx";

const CodeValidationContainer = ({input, setInput}) => {

    const style = {};
    const className = {};
    return (
        <>
            <h3>CHAVE MÓVEL DIGITAL</h3>
            <TextInput
                input={input}
                setInput={setInput}
                style={style}
                type={"text"}
                className={className}
                label={"inserir código"}
            />
        </>
    );
};

export default CodeValidationContainer;