import './App.css';
import Authorization from "./pages/Authorization.jsx";
import Authenticate from "./pages/Authenticate.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import CodeValidationContainer from "./components/CodeValidationContainer.jsx";
import CodeValidation from "./pages/CodeValidation.jsx";
import Unavailable from "./pages/Unavailable.jsx";

function App() {

    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="*" element={<Navigate to="/authorization" />} />
                    <Route path="/authorization" element={<Authorization />} />
                    <Route path="/authentication" element={<Authenticate />} />
                    <Route path="/code-validation" element={<CodeValidation />} />
                    <Route path="/unavailable" element={<Unavailable />} />
                </Routes>
            </main>
            <Footer/>
        </>

    );
}

export default App;
