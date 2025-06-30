import CompAutMethod from "../components/CompAutMethod.jsx";
import ButtonsContainer from "../components/ButtonsContainer.jsx";
import MainContainer from "../components/MainContainer.jsx";
import React from "react";

const Unavailable = () => {
    const handleReturn = () => navigate("/authorization");


    return (
        <MainContainer
            className={"dflxc g20"}
        >
            <CompUnavailableMethod/>
            <ButtonsContainer
                className={buttonsDetails.className}
                style={buttonsDetails.style}
                handleReturn={handleReturn}
                returnBtn={"voltar"}

            />
        </MainContainer>
    )
}

export default Unavailable;