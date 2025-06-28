import React from 'react';

const Footer = () => {
    const style = {
        container: {
            width: "100%",
            display: "inline-flex",
            justifyContent: "center",
            margin: "20px 0"

        },
        img: {
            width: "316px",
        },
        disclaimer: {
            maxWidth: "700px",
            margin: "90px auto 0 auto",
            fontSize: "14px",
            lineHeight: "1.5",
            textAlign: "center",
        }
    };

    return (
        <>
            <div style={style.disclaimer}>
                <p>
                    O processo de autenticação é um serviço da Identificação Eletrónica que permite confirmar a sua identidade, facilitando o acesso online a vários serviços públicos.  <a href="https://www.gov.pt/pt/servicos/autenticacao-eletronica">Saiba mais sobre a Identificação Eletrónica</a>.
                </p>
            </div>

            <div style={style.container}>
                <img style={style.img} src="public/images/image-ama.png" alt=""/>
            </div>
        </>
    );
};

export default Footer;