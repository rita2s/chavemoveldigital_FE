import CompRoundButton from "./CompRoundButton.jsx";

const CompMethodSelector = ({selected, onSelect}) => {
    return (
        <div>
        <div className="comp-method">
            <h4>SELECIONE O MÉTODO DE AUTENTICAÇÃO:</h4>
            <CompRoundButton
                label="Cartão de Cidadão"
                selected={selected === 'cc'}
                onClick={() => onSelect('cc')}
                />
            <CompRoundButton
                label="Chave Móvel Digital"
                selected={selected === 'cmd'}
                onClick={() => onSelect('cmd')}
                />
        </div>
            <div className="comp-method">
                <h4>Pretende fazer a autenticação através de:</h4>
                <CompRoundButton
                    label="Email"
                    selected={selected === 'email'}
                    onClick={() => onSelect('email')}
                />
                <CompRoundButton
                    label="Número de Telemóvel"
                    selected={selected === 'sms'}
                    onClick={() => onSelect('sms')}
                />
            </div>
        </div>
    )
}

export default CompMethodSelector;