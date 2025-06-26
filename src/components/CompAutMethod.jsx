import  React, { useState } from 'react';
import CompProgressBar from './CompProgressBar';
import CompAutMethod from './CompAutMethod';

const CompAutMethod = () => {
    const [selectMethod, setSelectedMethod] = useState(null);

    return (
        <div className="comp-aut-method">
            <h3>FAÇA A SUA AUTENTICAÇÃO COM:</h3>
            <CompProgressBar progress/>
            <CompAutMethod
                selected={selectedMethod}
                onSelect={setSelectedMethod}
            />
        </div>
    );
};

export default CompAutMethod;