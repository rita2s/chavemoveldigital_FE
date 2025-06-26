import Authenticate from "./Authenticate.jsx";
import CompRoundButton from "../components/CompRoundButton.jsx";
import CompMethodSelector from "../components/CompMethodSelector.jsx";
import CompBarProgress from "../components/CompBarProgress.jsx";
import CompAutMethod from "../components/CompAutMethod.jsx";

const ChooseAuthentication = () => {
    return (
        <div>
            <CompAutMethod/>
            <CompBarProgress/>
            <CompMethodSelector/>
            <CompRoundButton/>
        </div>
    )
}

export default ChooseAuthentication;