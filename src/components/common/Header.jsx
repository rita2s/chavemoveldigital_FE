import React from 'react';

const Header = () => {
    const style = {
        container: {
            width: "100%",
            backgroundColor: "var(--blue-autGov)",
            display: "inline-flex",
            justifyContent: "center"

        },
        img: {
            width: "200px",
        }
    }
    return (
        <div style={style.container}>
            <img style={style.img} src="public/images/image-autGov.png" alt=""/>
        </div>
    );
};

export default Header;