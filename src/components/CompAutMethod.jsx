import React from 'react';
import CompMethodSelector from "./CompMethodSelector.jsx";


const CompAutMethod = ({firstStep}) => {

    return (
        <div className="comp-aut-method">
            {
                firstStep
                    ? <CompMethodSelector />
                    : "" // TODO: COMPONENTE DO SECOND STEP
                // (A PARTE DO AUTORIZAR A EUVOTO OBTER OS SEGUINTES DADOS)
            }
        </div>
    );
};

export default CompAutMethod;