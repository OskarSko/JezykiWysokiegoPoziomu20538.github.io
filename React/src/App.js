import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import StronaGlowna from "./StronaGlowna";
import Lab7 from "./Lab7";
import Lab8 from "./Lab8";
import Lab9 from "./Lab9";
import NotFound from "./NotFound";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Strona Glowna</Link></li>
              <li><Link to="Lab7">Lab7</Link></li>
              <li><Link to="Lab8">Lab8</Link></li>
              <li><Link to="Lab9">Lab9</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<StronaGlowna />} />
            <Route path="/Lab7" element={<Lab7 />} />
            <Route path="/Lab8" element={<Lab8 />} />
            <Route path="/Lab9/*" element={<Lab9 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
