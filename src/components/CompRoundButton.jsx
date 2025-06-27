
const CompRoundButton = ({ label, id, selected, handleSelectChange, name }) => {
    console.log(selected, id)
    return (

        <>
            <input
                type={"radio"}
                id={id}
                name={name}
                className={`round-button`}
                value={id}
                onChange={(e) => handleSelectChange(e)}
            />
            <label
                htmlFor={id}
                className={selected === id ? `selected` : ""}
            >{label}</label>
        </>
    );
}

export default CompRoundButton;