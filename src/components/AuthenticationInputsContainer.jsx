import React from 'react';
import TextInput from "./common/TextInput/index.jsx";

const AuthenticationInputsContainer = ({input, setInput, inputsDetails}) => {
    const {telephoneNumber, pin} = inputsDetails;

    const style = {

    }

    const className = {

    }

    return (
        <div className={"dflxc"}>
        <h3>{inputsDetails.title.toUpperCase()}</h3>
        <div className={"dflxc g20"}>
            <TextInput
                input={input}
                setInput={setInput}
                label={telephoneNumber?.label}
                type={telephoneNumber?.type}
                style={style}
                className={className}
            />
            <TextInput
                input={input}
                setInput={setInput}
                label={pin?.label}
                type={pin?.type}
                style={style}
                className={className}
            />

        </div>
        </div>
    );
};

export default AuthenticationInputsContainer;