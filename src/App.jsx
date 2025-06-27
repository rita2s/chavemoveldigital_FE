import './App.css';
import Authorization from "./pages/Authorization.jsx";
import Authenticate from "./pages/Authenticate.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/choose-authentication" />} />
                    <Route path="choose-authentication" element={<ChooseAuthentication />} />
                    <Route path="/authentication" element={<Authenticate />} />

                    <Route path="/authorization" element={<Authorization />} />

                    <Route path="*" element={<Navigate to="/choose-authentication" />} />
                </Routes>
            </main>
            <Footer/>
        </>

    );
}

export default App;
