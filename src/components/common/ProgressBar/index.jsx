import React from 'react';

const ProgressBar = ({progress}) => {
    const style = {
        container: {
            width: 200,
            color: "var(--blue-autGov)",
            borderBottom: "3px solid var(--bar-autGov)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0 5px 0 5px"
        },
        bar: {
            width: `${progress}%`,
            height: 13,
            backgroundColor: "var(--bar-autGov)",
        }
    }

    return (
        <div style={style.container} className={"g5 pt-sans-bold"}>
            <div style={style.bar}/>
            <span>{progress}%</span>
        </div>
    );
};

export default ProgressBar;