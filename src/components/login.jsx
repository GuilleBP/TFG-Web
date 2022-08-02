import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Input } from 'react-bootstrap';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const styles = {
    margin: "0.5%"
}

export function Login() {
    return (
        <div>
            <div>
                <label style={styles}>Usuario</label>
            </div>
            <div>
                <input style={styles}></input>
            </div>
            <div>
                <label style={styles}>Contraseña</label>
            </div>
            <div>
                <input style={styles}></input>
            </div>
            <div>
                <Link to="/proyects"><Button style={styles}>Iniciar sesión</Button></Link>
                <Link to="/register"><Button style={styles}>Registrarse</Button></Link>
            </div>
        </div>
    )
}