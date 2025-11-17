import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email: email.trim(),
        password
      });

      if (!res.data.token) {
        alert("El servidor no devolvió un token");
        return;
      }

      localStorage.setItem("token", res.data.token);
      alert("Login exitoso");
    } catch (err) {
      console.log(err);
      alert("Credenciales incorrectas o ruta no encontrada");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Ingresar</button>
    </div>
  );
}

export default Login;
