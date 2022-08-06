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
        //reqres registered sample user
        const loginPayload = {
            username: document.getElementById('username').value,
            pass: document.getElementById('pass').value
        }

        axios.post("http://localhost:8000/user/login", loginPayload)
            .then(response => {
                //get token from response
                const token = response.data.token;

                //set JWT token to local
                localStorage.setItem("token", token);

                //set token to axios common header
                setAuthToken(token);

                //redirect user to home page
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