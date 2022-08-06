import React /*{ Fragment, Navbar }*/ from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Proyect } from "./components/proyect";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { setAuthToken } from './components/setAuthToken';

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage.getItem("token");
 if (token) {
     setAuthToken(token);
 }
root.render(
  <React.StrictMode>
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/register">Crear cuenta</Link>
          </li>
        </ul> */}
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route path="/proyects" element={<Proyect/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);