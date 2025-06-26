import React from 'react';
import "./style.css";

const Button = ({className, style, btnType, btnValue, handleInput}) => {

    const btnText = <h2 style={style.h2}>{btnValue.toUpperCase()}</h2>

    return (<>
            <button
                id={"button"}
                type={btnType}
                onClick={handleInput}
                className={className.button}
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