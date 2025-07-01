import CompRoundButton from "./CompRoundButton.jsx";
import {useState} from "react";

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
                    />

                    <CompRoundButton
                        id="cmd"
                        name="authMethod"
                        value="radio2"
                        label="Chave Móvel Digital"
                        selected={selected.authMethod}
                        handleSelectChange={handleSelectChange}
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
                    />
                    <CompRoundButton
                        id="sms"
                        name="personalMethod"
                        value="radio4"
                        label="Número de Telemóvel"
                        selected={selected.personalMethod}
                        handleSelectChange={handleSelectChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default CompMethodSelector;