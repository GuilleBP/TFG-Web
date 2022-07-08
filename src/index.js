import React, { Fragment, Navbar } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Proyect } from "./components/proyect";
import { Register } from "./components/register";
import { Login } from "./components/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
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