import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Inicio from "./pages/Inicio";
import Contenido from "./pages/Contenido";
import Servicios from "./pages/Servicios";
import Contactos from "./pages/Contactos";
import Acercade from "./pages/Acercade";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <MenuBar />

      <div className="container" style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contenido" element={<Contenido />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/acerca" element={<Acercade />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
