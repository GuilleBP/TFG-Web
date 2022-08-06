import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const styles = {
    margin: "0.5%",
}

const input_styles = {
    margin: "0.5%",
    // backgroundColor: '#fc9680'
}

export function Register() {

    const registerUser = async () => {
        async function apicall() {
            await axios.post('http://localhost:8000/user/register', {
                data: {
                    name: document.getElementById('name').value,
                    pass: document.getElementById('pass').value,
                    username: document.getElementById('username').value,
                    email: document.getElementById('email').value
                }
            }).then(value => {
                if (value.data) {
                    swal({
                        title: "Usuario creado con éxito",
                        icon: "success",
                        button: "Cerrar",
                    }).then(() => {
                        document.getElementById('cancel').click()
                    })
                } else {
                    swal({
                        title: "Usuario en uso",
                        text: " - El nombre de usuario que ha introducido esta en uso, por favor introduzca uno nuevo.",
                        icon: "error",
                        button: "Cerrar",
                    })
                }
            })
        }
        clean_form()
        if (check_form())
            apicall();
    }

    function clean_form() {
        document.getElementById('pass').style.backgroundColor = 'white'
        document.getElementById('pass2').style.backgroundColor = 'white'
        document.getElementById('name').style.backgroundColor = 'white'
        document.getElementById('username').style.backgroundColor = 'white'
        document.getElementById('email').style.backgroundColor = 'white'
    }

    function check_form() {
        let return_value = true;
        let error_msg = ''
        if (document.getElementById('pass').value !== document.getElementById('pass2').value) {
            document.getElementById('pass').style.backgroundColor = '#fc9680'
            document.getElementById('pass2').style.backgroundColor = '#fc9680'
            return_value = false;
            error_msg += ' - Las contraseñas no son iguales \n'
        }
        if (document.getElementById('pass').value === null || document.getElementById('pass').value === '') {
            document.getElementById('pass').style.backgroundColor = '#fc9680'
            return_value = false;
            error_msg += ' - El campo contraseña no puede estar vacío \n'
        }
        if (document.getElementById('pass2').value === null || document.getElementById('pass2').value === '') {
            document.getElementById('pass2').style.backgroundColor = '#fc9680'
            return_value = false;
            error_msg += ' - El campo repetir contraseña no puede estar vacío \n'
        }
        if (document.getElementById('name').value === null || document.getElementById('name').value === '') {
            document.getElementById('name').style.backgroundColor = '#fc9680'
            return_value = false;
            error_msg += ' - El campo nombre no puede estar vacío \n'
        }
        if (document.getElementById('username').value === null || document.getElementById('username').value === '') {
            document.getElementById('username').style.backgroundColor = '#fc9680'
            return_value = false;
            error_msg += ' - El campo usuario no puede estar vacío \n'
        }
        if (document.getElementById('email').value === null || document.getElementById('email').value === '') {
            document.getElementById('email').style.backgroundColor = '#fc9680'
            return_value = false;
            error_msg += ' - El campo email no puede estar vacío \n'
        }
        if (return_value === false)
            swal({
                title: "Error",
                text: error_msg,
                icon: "error",
                button: "Cerrar",
            })
        return return_value;
    }

    return (
        <div>
            Registro
            <div>
                <div>
                    <label style={styles}>Usuario</label>
                </div>
                <div id="error_user">
                    <input id="username" style={input_styles}></input>
                </div>
                <div>
                    <label style={styles}>Contraseña</label>
                </div>
                <div>
                    <input id="pass" type="password" style={input_styles}></input>
                </div>
                <div>
                    <label style={styles}>Repite contraseña</label>
                </div>
                <div>
                    <input id="pass2" type="password" style={input_styles}></input>
                </div>
                <div>
                    <label style={styles}>Nombre</label>
                </div>
                <div>
                    <input id="name" style={input_styles}></input>
                </div>
                <div>
                    <label style={styles}>Email</label>
                </div>
                <div>
                    <input id="email" style={input_styles}></input>
                </div>
                <div>
                    <Button style={styles} onClick={() => registerUser()}>Confirmar registro</Button>
                    <Link to="/"><Button style={styles} id="cancel">Cancelar</Button></Link>
                </div>
            </div>
        </div>
    )
}