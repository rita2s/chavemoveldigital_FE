import  React from 'react';
import CompMethodSelector from "./CompMethodSelector.jsx";
import ProgressBar from "./common/ProgressBar/index.jsx";


const CompAutMethod = ({firstStep}) => {

    return (
        <div className="comp-aut-method">
            <h3>FAÇA A SUA AUTENTICAÇÃO COM:</h3>
            <ProgressBar progress={30}/>
            {
                firstStep
                ? <CompMethodSelector/>
            : "" // TODO: COMPONENTE DO SECOND STEP
                // (A PARTE DO AUTORIZAR A EUVOTO OBTER OS SEGUINTES DADOS)
            }
        </div>
    );
};

export default CompAutMethod;