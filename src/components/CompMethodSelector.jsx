import CompRoundButton from "./CompRoundButton.jsx";

const CompMethodSelector = ({selected, onSelect}) => {
    return (
        <div>
            <form className="comp-method" onSubmit={onSelect}>
                <h4>SELECIONE O MÉTODO DE AUTENTICAÇÃO:</h4>
                <div className="comp-round-button-container">
                    <CompRoundButton
                        id="bi"
                        name="auth-method"
                        value="radio1"
                        label="Cartão de Cidadão"
                        selected={selected === 'cc'}
                        onClick={() => onSelect('cc')}
                    />
                    <CompRoundButton
                        id="cmd"
                        name="auth-method"
                        value="radio2"
                        label="Chave Móvel Digital"
                        selected={selected === 'cmd'}
                        onClick={() => onSelect('cmd')}
                    />
                </div>
                <div className="comp-method">
                    <h4>Pretende fazer a autenticação através de:</h4>
                    <CompRoundButton
                        id="email"
                        name="personal-method"
                        value="radio3"
                        label="Email"
                        selected={selected === 'email'}
                        onClick={() => onSelect('email')}
                    />
                    <CompRoundButton
                        id="email"
                        name="personal-method"
                        value="radio4"
                        label="Número de Telemóvel"
                        selected={selected === 'sms'}
                        onClick={() => onSelect('sms')}
                    />
                </div>
            </form>
        </div>
    )
}

export default CompMethodSelector;