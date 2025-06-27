import CompRoundButton from "./CompRoundButton.jsx";

const CompMethodSelector = ({selected, setSelectedMethod}) => {
    return (
        <div>
            <form className="comp-method" onSubmit={""}>
                <h4>SELECIONE O MÉTODO DE AUTENTICAÇÃO:</h4>
                <div className="comp-round-button-container">
                    <CompRoundButton
                        id="bi"
                        name="auth-method"
                        value="radio1"
                        label="Cartão de Cidadão"
                        selected={selected}
                        setSelectedMethod={setSelectedMethod}
                    />
                    <CompRoundButton
                        id="cmd"
                        name="auth-method"
                        value="radio2"
                        label="Chave Móvel Digital"
                        selected={selected}
                        setSelectedMethod={setSelectedMethod}
                    />
                </div>
                <div className="comp-round-button-container">
                    <h4>Pretende fazer a autenticação através de:</h4>
                    <CompRoundButton
                        id="email"
                        name="personal-method"
                        value="radio3"
                        label="Email"
                        selected={selected}
                        setSelectedMethod={setSelectedMethod}
                    />
                    <CompRoundButton
                        id="sms"
                        name="personal-method"
                        value="radio4"
                        label="Número de Telemóvel"
                        selected={selected}
                        setSelectedMethod={setSelectedMethod}
                    />
                </div>
            </form>
        </div>
    )
}

export default CompMethodSelector;