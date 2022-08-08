import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Proyect } from "./components/proyect";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { setAuthToken } from "./components/setAuthToken";
import Auth from "./components/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={Auth() ? <Proyect/> : <Login />}></Route>
          <Route exact path="/proyects" element={Auth() ? <Proyect/> : <Login />}></Route>
          <Route path="/register" element={Auth() ? <Proyect/> : <Register />}></Route>
        </Routes>
    </Router>
  </React.StrictMode>
);
