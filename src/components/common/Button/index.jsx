import React from 'react';

const Button = ({style, inputType, inputValue, handleInput}) => {
    return (
        <div className={style.container}>
            <input
                id={"button"}
                type={inputType}
                onClick={handleInput}
                className={style.input}
                value={inputValue}
            />
        </div>
    );
};

export default Button;