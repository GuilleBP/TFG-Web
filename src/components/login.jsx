import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Input } from 'react-bootstrap';
import { setAuthToken } from './setAuthToken';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const styles = {
    margin: "0.5%"
}

export function Login() {

    function loginApi() {
        const loginPayload = {
            username: document.getElementById('username').value,
            pass: document.getElementById('pass').value
        }

        axios.post("http://localhost:8000/user/login", loginPayload)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("username", loginPayload.username);
                setAuthToken(token);
                window.location.href = '/proyects'
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <label style={styles}>Usuario</label>
            </div>
            <div>
                <input id="username" style={styles}></input>
            </div>
            <div>
                <label style={styles}>Contraseña</label>
            </div>
            <div>
                <input id="pass" type="password" style={styles}></input>
            </div>
            <div>
                <Button style={styles} onClick={() => loginApi()}>Iniciar sesión</Button>
                <Link to="/register"><Button style={styles}>Registrarse</Button></Link>
            </div>
        </div>
    )
}