
const CompRoundButton = ({ label, id, selected, name }) => {

    return (
        <>
            <input type={"radio"} id={id} name={name} className={`round-button ${selected ? 'selected' : ''}`}/>
            <label htmlFor={id} className={selected ? `selected-label` : ""}>{label}</label>
        </>
    );
}

export default CompRoundButton;