import React from 'react';
import {Link} from "react-router-dom";

const WarningMessage = () => {
    const style = {
        container: {
            backgroundColor: "var(--warning-autGov)",
            width: "100%",
            height: 70,
            marginTop: "-5px",
            textAlign: "center"
        },
        span: {
            margin: "0 20px",
        }
    };

    return (
        <div style={style.container} className={"dflx pt-sans-regular"}>
            <span style={style.span}><strong>Atenção: </strong>Nunca forneça os seus códigos PIN ou outros dados pessoais por
                SMS, email ou
                telefone.&nbsp;
                <Link
                    to={"https://www2.gov.pt/burlas-e-sms-fraudulentas-em-nome-de-chave-movel-digital-ou-autenticacao-gov"}>Saiba
                    mais sobre como se proteger de tentativas de fraude no portal gov.pt.
                </Link>
            </span>
        </div>
    );
};

export default WarningMessage;