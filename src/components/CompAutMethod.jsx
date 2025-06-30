import React from 'react';
import CompMethodSelector from "./CompMethodSelector.jsx";
import CompAgreeToData from "./CompAgreeToData.jsx";


const CompAutMethod = ({firstStep, selected, setSelectedMethod}) => {

    return (
        <div className="comp-aut-method">
            {
                firstStep
                    ? <CompMethodSelector selected={selected} setSelectedMethod={setSelectedMethod} />
                    : <CompAgreeToData />
            }
        </div>
    );
};

export default CompAutMethod;