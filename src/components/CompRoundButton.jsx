
const CompRoundButton = ({ label, id, selected, setSelectedMethod, name }) => {
    console.log(id)

    return (

        <>
            <input
                type={"radio"}
                id={id}
                name={name}
                className={`round-button`}
                onChange={() => setSelectedMethod(id)}
            />
            <label
                htmlFor={id}
                className={selected === id ? `selected` : ""}
            >{label}</label>
        </>
    );
}

export default CompRoundButton;