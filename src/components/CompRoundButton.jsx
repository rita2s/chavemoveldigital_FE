
const CompRoundButton = ({ label, id, selected, handleSelectChange, name, checked }) => {
    return (

        <div className="dflx g10">
            <input
                type={"radio"}
                id={id}
                name={name}
                className={`round-button`}
                value={id}
                onChange={(e) => handleSelectChange(e)}
                checked={checked}
            />
            <label
                htmlFor={id}
                className={selected === id ? `selected` : ""}
            >{label}</label>
        </div>
    );
}

export default CompRoundButton;