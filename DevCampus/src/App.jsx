import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Sobre from "./pages/Sobre.jsx";
import Cursos from "./pages/Cursos.jsx";
import Ingresso from "./pages/Ingresso.jsx";
import Noticias from "./pages/Noticias.jsx";
import Contato from "./pages/Contato.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/ingresso" element={<Ingresso />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}