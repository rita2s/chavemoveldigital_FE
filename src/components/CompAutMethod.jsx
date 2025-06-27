import  React from 'react';
import CompMethodSelector from "./CompMethodSelector.jsx";
import ProgressBar from "./common/ProgressBar/index.jsx";


const CompAutMethod = () => {

    return (
        <div className="comp-aut-method">
            <h3>FAÇA A SUA AUTENTICAÇÃO COM:</h3>
            <ProgressBar progress={30}/>
            <CompMethodSelector />
        </div>
    );
};

export default CompAutMethod;