import React from 'react';

const Footer = () => {
    const style = {
        container: {
            width: "100%",
            display: "inline-flex",
            justifyContent: "center",
            margin: "30px 0 0 0",

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
        },
        copyright: {
            maxWidth: "600px",
            margin: "5px auto 20px auto",
            fontSize: "12px",
            lineHeight: "1.5",
            textAlign: "center",
            color: "black"
        },
        link: {
            color: "#838383"
        }
    };

    return (
        <>
            <div style={style.disclaimer}>
                <p>
                    O processo de autenticação é um serviço da Identificação Eletrónica que permite confirmar a sua <br/> identidade,<br/> facilitando o acesso online a vários serviços públicos.  <a href="https://www.gov.pt/pt/servicos/autenticacao-eletronica">Saiba mais sobre a Identificação Eletrónica</a>.
                </p>
            </div>

            <div style={style.container}>
                <img style={style.img} src="public/images/image-ama.png" alt=""/>
            </div>

            <div style={style.copyright}>
                AMA - Agência para a Modernização Administrativa, IP - Todos os direitos reservados @ 2025<br />
                <a href="https://www.ama.gov.pt" style={style.link}>www.ama.gov.pt</a> | <a href="mailto:ama@ama.pt" style={style.link}>ama@ama.pt</a>
            </div>
        </>
    );
};

export default Footer;