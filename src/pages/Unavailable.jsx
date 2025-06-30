import ButtonsContainer from "../components/ButtonsContainer.jsx";
import {useNavigate} from "react-router-dom";


function CompUnavailableMethod() {
    return (
        <div className="dflxc g20">
            <h2 style={{margin: 0}}>Método de autenticação indisponível</h2>
            <p>O método de autenticação selecionado não está disponível no momento.</p>
            <p>Por favor, tente novamente mais tarde ou escolha outro método de autenticação.</p>
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
            className={"dflxc g20"}
        >
            <CompUnavailableMethod/>
            <ButtonsContainer
                handleReturn={handleClick.handleReturn}
                returnBtn={"voltar"}

            />
        </div>
    )
}

export default Unavailable;