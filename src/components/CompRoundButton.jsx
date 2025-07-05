
const CompRoundButton = ({ label, id, selected, handleSelectChange, name }) => {
    return (

        <div className="dflx g10">
            <input
                type={"radio"}
                id={id}
                name={name}
                className={`round-button`}
                value={id}
                checked={selected === id}
                onChange={(e) => handleSelectChange(e)}
            />
            <label
                htmlFor={id}
                className={selected === id ? `selected` : ""}
            >{label}</label>
        </div>
    );
}

export default CompRoundButton;