import React from 'react';
import Button from "./common/Button/index.jsx";

const ButtonsContainer = (
    {
        handleReturn,
        handleAdvance,
        returnBtn,
        advanceBtn
    }
) => {

    const className = {
        return: {
            container: "dflx g10 pt-sans-bold blue-autGov",
            button: "btn-grey-main",
            arrow: "arrow-blue"
        },
        advance: {
            container: "dflx g10 pt-sans-bold white-autGov",
            button: "btn-blue-main",
            arrow: "arrow-white"
        }
    };

    const style = {
        h2: {
            margin: 0,
        }
    };

    return (
        <div className={"dflx g20"}>
            <Button
                className={className.return}
                style={style}
                btnType={"button"}
                btnValue={returnBtn}
                handleClick={handleReturn}
            />
            <Button
                className={className.advance}
                style={style}
                btnType={"button"}
                btnValue={advanceBtn}
                handleClick={handleAdvance}
            />
        </div>
    );
};

export default ButtonsContainer;