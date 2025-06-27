import React from 'react';
import WarningMessage from "./WarningMessage/index.jsx";

const Header = () => {
    const style = {
        container: {
            width: "100%",
            backgroundColor: "var(--blue-autGov)",
            display: "inline-flex",
            justifyContent: "center"

        },
        img: {
            width: "316px",
        }
    };
    return (
        <>
            <div style={style.container}>
                <img style={style.img} src="public/images/image-autGov.png" alt=""/>
            </div>
            <WarningMessage/>
        </>
    );
};

export default Header;