import CompRoundButton from "./CompRoundButton.jsx";

const CompMethodSelector = ({selected, onSelect}) => {
    return (
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
    )
}

export default CompMethodSelector;