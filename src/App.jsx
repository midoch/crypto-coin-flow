import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Coin from "./routes/Coin";

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route for handling undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
