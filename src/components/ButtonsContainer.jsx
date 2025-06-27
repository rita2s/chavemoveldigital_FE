import React from 'react';
import Button from "./common/Button/index.jsx";

const ButtonsContainer = (
    {
        className,
        style,
        handleReturn,
        handleAdvance,
        returnBtn,
        advanceBtn
    }
) => {

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