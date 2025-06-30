import ButtonsContainer from "../components/ButtonsContainer.jsx";
import MainContainer from "../components/MainContainer.jsx";
import {useNavigate} from "react-router-dom";


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