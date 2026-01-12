import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Adoption from "./pages/Adoption.tsx";
import Volunteer from "./pages/volunteer.tsx";
import { Route, Routes, BrowserRouter } from "react-router";
import Footer from "./components/footer.tsx";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Adoption" element={<Adoption />} />
      <Route path="/Volunteer" element={<Volunteer />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
