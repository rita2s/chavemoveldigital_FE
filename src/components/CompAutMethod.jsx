
const CompAutMethod = () => {

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