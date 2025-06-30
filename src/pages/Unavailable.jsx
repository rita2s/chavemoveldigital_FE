import ButtonsContainer from "../components/ButtonsContainer.jsx";
import MainContainer from "../components/MainContainer.jsx";
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
    const handleReturn = () => navigate("/authorization");
    const navigate = useNavigate();

    const buttonsDetails = {
        className: {
            return: {
                container: "dflx g10 pt-sans-bold blue-autGov",
                button: "btn-grey-main",
                arrow: "arrow-blue"
            },
            advance: {
                container: "dflx g10 pt-sans-bold white-autGov",
                button: "btn-blue-main",
                arrow: "arrow-white"
            }
        },
        style: {
            h2: {
                margin: 0,
            }
        }
    };

    return (
        <MainContainer
            className={"dflxc g20"}
        >
            <CompUnavailableMethod/>
            <ButtonsContainer
                className={buttonsDetails.className}
                style={buttonsDetails.style}
                handleReturn={handleReturn}
                returnBtn={"voltar"}

            />
        </MainContainer>
    )
}

export default Unavailable;