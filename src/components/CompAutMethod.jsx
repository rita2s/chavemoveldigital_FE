import React from 'react';
import CompMethodSelector from "./CompMethodSelector.jsx";
import CompAgreeToData from "./CompAgreeToData.jsx";


const CompAutMethod = ({firstStep}) => {

    return (
        <div className="comp-aut-method">
            {
                firstStep
                    ? <CompMethodSelector />
                    : <CompAgreeToData />
            }
        </div>
    );
};

export default CompAutMethod;