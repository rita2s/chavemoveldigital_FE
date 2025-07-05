import CompRoundButton from "./CompRoundButton.jsx";

const CompMethodSelector = ({ selected, setSelectedMethod }) => {

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setSelectedMethod(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div>
            <form className="comp-method" onSubmit={(e) => e.preventDefault()}>                <h4>SELECIONE O MÉTODO DE AUTENTICAÇÃO:</h4>
                <div className="comp-round-button-container">

                    <CompRoundButton
                        id="bi"
                        name="authMethod"
                        value="radio1"
                        label="Cartão de Cidadão"
                        selected={selected.authMethod}
                        handleSelectChange={handleSelectChange}
                        checked={selected.authMethod === "bi" || (!selected.authMethod && false)}
                    />

                    <CompRoundButton
                        id="cmd"
                        name="authMethod"
                        value="radio2"
                        label="Chave Móvel Digital"
                        selected={selected.authMethod}
                        handleSelectChange={handleSelectChange}
                        checked={selected.authMethod === "cmd" || (!selected.authMethod && true)}

                    />
                </div>
                <h4>Pretende fazer a autenticação através de:</h4>
                <div className="comp-round-button-container">
                    <CompRoundButton
                        id="email"
                        name="personalMethod"
                        value="radio3"
                        label="Email"
                        selected={selected.personalMethod}
                        handleSelectChange={handleSelectChange}
                        checked={selected.personalMethod === "email" || (!selected.personalMethod && false)}

                    />
                    <CompRoundButton
                        id="sms"
                        name="personalMethod"
                        value="radio4"
                        label="Número de Telemóvel"
                        selected={selected.personalMethod}
                        handleSelectChange={handleSelectChange}
                        checked={selected.personalMethod === "sms" || (!selected.personalMethod && true)}

                    />
                </div>
            </form>
        </div>
    )
}

export default CompMethodSelector;