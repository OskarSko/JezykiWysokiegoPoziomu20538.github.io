import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OMnie from "./pages/Lab9/OMnie";
import Kontakt from "./pages/Lab9/Kontakt";
import Film from "./pages/Lab9/Film";
import Zainteresowania from "./pages/Lab9/Zainteresowania";
function Lab9() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/Lab9/OMnie">O mnie</Link></li>
                    <li><Link to="/Lab9/Zainteresowania">Moje Zainteresowania</Link></li>
                    <li><Link to="/Lab9/Film">Ulubiony film</Link></li>
                    <li><Link to="/Lab9/Kontakt">Kontakt</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="OMnie" element={<OMnie />} />
                <Route path="Zainteresowania" element={<Zainteresowania />} />
                <Route path="Film" element={<Film />} />
                <Route path="Kontakt" element={<Kontakt />} />
            </Routes>
        </div>
    );
}
export default Lab9;