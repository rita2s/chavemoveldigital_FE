
const CompRoundButton = ({ label, selected, onClick }) => {

    return (
        <div className="comp-round-button-container" onClick={onClick}>
            <div className={`round-button ${selected ? 'selected' : ''}`}/>
            <span className={selected ? `selected-label` : ""}>{label}</span>
        </div>
    );
}