import React from 'react';
import Button from "../components/common/Button/index.jsx";

const Authorization = () => {

    const handleAuthorize = () => {
        return "";
    };

    const handleReturn = () => {
        return "";
    };

    const className = {
        container: "dflx g10 pt-sans-bold",
    };

    const style = {
        margin: 0,
    }

    return (
        <div className={"dflx g20"}>
            <Button
                className={{
                    container: `${className.container} black`,
                    button: "btn-grey-main",
                    arrow: "arrow-blue"
                }}
                style={style}
                btnType={"button"}
                btnValue={"Voltar"}
                handleClick={handleReturn}
            />
            <Button
                className={{
                    container: `${className.container} white`,
                    button: "btn-blue-main",
                    arrow: "arrow-white"
                }}
                style={style}
                btnType={"button"}
                btnValue={"Autorizar"}
                handleClick={handleAuthorize}
            />
        </div>
    );
};

export default Authorization;