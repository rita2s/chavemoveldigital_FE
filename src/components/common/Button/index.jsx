import React from 'react';
import "./style.css";

const Button = ({className, style, btnType, btnValue, handleClick}) => {

    style.button = {
        cursor: "pointer"
    };

    const btnText = <h2 style={style.h2}>{btnValue.toUpperCase()}</h2>

    return (<>
            <button
                type={btnType}
                onClick={handleClick}
                className={className.button}
                style={style.button}
                value={btnValue}
            >{
                className.button === "btn-grey-main"
                    ? <div className={className.container}>
                        <div className={className.arrow}/>
                        {btnText}
                    </div>
                    : <div className={className.container}>
                        {btnText}
                        <div className={className.arrow}/>
                    </div>
            }</button>

        </>
    );
};

export default Button;