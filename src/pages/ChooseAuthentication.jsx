import '../components/compStyle.css'
import CompAutMethod from "../components/CompAutMethod.jsx";
import Button from "../components/common/Button/index.jsx";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const ChooseAuthentication = () => {

    const navigate = useNavigate();
    const {originURL} = useLocation();
    const [firstStep, setFirstStep] = useState(true);

    const handleClick = {
        handleContinue: () => setFirstStep(false),
        handleAuthorize: () => navigate("/authorization"),
        handleReturn: () => navigate(originURL)
    };

    const className = {
        container: "dflx g10 pt-sans-bold",
    };

    const style = {
        h2: {
            margin: 0,
        }
    };


    return (
        <div>
            <CompAutMethod/>
            <div className={"dflx g20"}>
                <Button
                    className={{
                        container: `${className.container} blue-autGov`,
                        button: "btn-grey-main",
                        arrow: "arrow-blue"
                    }}
                    style={style}
                    btnType={"button"}
                    btnValue={"voltar"}
                    handleClick={handleClick.handleReturn}
                />
                <Button
                    className={{
                        container: `${className.container} white-autGov`,
                        button: "btn-blue-main",
                        arrow: "arrow-white"
                    }}
                    style={style}
                    btnType={"button"}
                    btnValue={"continuar"}
                    handleClick={handleClick.handleContinue}
                />
            </div>

        </div>
    )
}

export default ChooseAuthentication;