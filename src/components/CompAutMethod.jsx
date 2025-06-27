import  React from 'react';
import CompBarProgress from "./CompBarProgress.jsx";
import CompMethodSelector from "./CompMethodSelector.jsx";

const CompAutMethod = () => {

    return (
        <div className="comp-aut-method">
            <h3>FAÇA A SUA AUTENTICAÇÃO COM:</h3>
            <CompMethodSelector />
        </div>
    );
};

export default CompAutMethod;