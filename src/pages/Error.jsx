import ButtonsContainer from "../components/ButtonsContainer.jsx";
import {useNavigate} from "react-router-dom";


const Error = () => {
    return (
        <div className="dflxc">
            <h1 className="fs2-5">Erro</h1>
            <p className="fs1-5">Não foi possível realizar a operação.</p>
            <Unavailable/>
        </div>
    );
}

const Unavailable = () => {
    const navigate = useNavigate();

    const handleClick = {
        handleReturn: () => navigate("/authorization")
    };




    return (
        <div
            className={"dflxc g20 comp-style"}
        >
            <Unavailable/>
            <ButtonsContainer
                handleReturn={handleClick.handleReturn}
                returnBtn={"voltar"}

            />
        </div>
    )
}

export default Error;