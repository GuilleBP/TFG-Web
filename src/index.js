import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Proyect } from "./components/proyect";
import { Keyword } from "./components/keyword";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { setAuthToken } from "./components/setAuthToken";
import NavBar from "./components/NavBar";
import Auth from "./components/Auth";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

const styles = {
  height: '100%',
  width: '100%',
  marginTop: '5%',
}

root.render(
  <React.StrictMode>
    <NavBar />
    <div id="mainDiv" style={styles}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={Auth() ? <Proyect /> : <Login />}
          ></Route>
          <Route
            exact
            path="/proyects"
            element={Auth() ? <Proyect /> : <Login />}
          ></Route>
          <Route
            path="/register"
            element={Auth() ? <Proyect /> : <Register />}
          ></Route>
          <Route
            path="/keyword"
            element={Auth() ? <Keyword /> : <Login />}
          ></Route>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
