import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Adoption from "./pages/Adoption.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Adoption" element={<Adoption />} />
    </Routes>
  </BrowserRouter>
);
