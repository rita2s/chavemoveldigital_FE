import './App.css';
import Authorization from "./pages/Authorization.jsx";
import Authenticate from "./pages/Authenticate.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import CodeValidationContainer from "./components/CodeValidationContainer.jsx";
import CodeValidation from "./pages/CodeValidation.jsx";
import Unavailable from "./pages/Unavailable.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {

    return (
        <>
            <Header/>
            <main>
                <ErrorBoundary fallback={<h2>Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</h2>}>
                    <Routes>
                        <Route path="*" element={<Navigate to="/authorization"/>}/>
                        <Route path="/authorization" element={<Authorization/>}/>
                        <Route path="/authentication" element={<Authenticate/>}/>
                        <Route path="/code-validation" element={<CodeValidation/>}/>
                        <Route path="/unavailable" element={<Unavailable/>}/>
                    </Routes>
                </ErrorBoundary>
            </main>
            <Footer/>
        </>

    );
}

export default App;
