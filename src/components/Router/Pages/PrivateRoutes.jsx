import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminPage, ConfigPage, DashboardPage, HomePage, LandingPage } from "./Page";
import Nav from "./components/layout/Nav";
import "./App.css";

const PrivateRoutes = () => {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Nav user={user} setUser={setUser} />
            <Routes>
                <Route index elements={<LandingPage />} />
                <Route path="/landing" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/config" element={<ConfigPage />} />
            </Routes>
        
        </BrowserRouter>
    )
}
export default PrivateRoutes;

