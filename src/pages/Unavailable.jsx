import CompAutMethod from "../components/CompAutMethod.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import MainContainer from "../components/MainContainer.jsx";
import React from "react";

const Unavailable = () => {

    return (
        <MainContainer
            className={"dflxc g20"}
        >
            <CompUnavailableMethod/>
            <ButtonsContainer
                handleReturn={handleClick.handleReturn}
                handleAdvance={firstStep ? handleClick.handleContinue : handleClick.handleAuthorize}
                returnBtn={"voltar"}
                advanceBtn={firstStep ? "continuar" : "autorizar"}
            />
        </MainContainer>
    )
}

export default Unavailable;