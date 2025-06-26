
const CompBarProgress = ({ progress }) => {

    return (
        <div className="CompBarProgressBar">
            <span>{progress}%</span>
            <div className="bar">
                <div className="fill" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}