import  React, { useState } from 'react';
import CompBarProgress from "./CompBarProgress.jsx";
import CompMethodSelector from "./CompMethodSelector.jsx";

const CompAutMethod = () => {
    const [selectMethod, setSelectedMethod] = useState(null);

    return (
        <div className="comp-aut-method">
            <h3>FAÇA A SUA AUTENTICAÇÃO COM:</h3>
            <CompBarProgress progress/>
            <CompMethodSelector
                selected={selectMethod}
                onSelect={setSelectedMethod}
            />
        </div>
    );
};

export default CompAutMethod;