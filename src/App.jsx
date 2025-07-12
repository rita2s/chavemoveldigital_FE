import './App.css';
import Authorization from "./pages/Authorization.jsx";
import Authenticate from "./pages/Authenticate.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import CodeValidation from "./pages/CodeValidation.jsx";
import Unavailable from "./pages/Unavailable.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ProtectedRoute from "./services/ProtectedRoute.jsx";

function App() {

    return (
        <>
            <Header/>
            <main>
                <ErrorBoundary fallback={<h2 style={{marginTop: 50, textAlign: "center"}}>Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</h2>}>
                    <Routes>
                        <Route path="*" element={<Navigate to="/authorization"/>}/>
                        <Route path="/authorization" element={<ProtectedRoute><Authorization/></ProtectedRoute>}/>
                        <Route path="/authentication" element={<ProtectedRoute><Authenticate/></ProtectedRoute>}/>
                        <Route path="/code-validation" element={<ProtectedRoute><CodeValidation/></ProtectedRoute>}/>
                        <Route path="/unavailable" element={<ProtectedRoute><Unavailable/></ProtectedRoute>}/>
                        <Route path="/error" element={<ProtectedRoute><Error/></ProtectedRoute>}/>
                    </Routes>
                </ErrorBoundary>
            </main>
            <Footer/>
        </>

    );
}

export default App;
