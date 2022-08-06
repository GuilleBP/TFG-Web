import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { FaPlus, FaPencilAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { setAuthToken } from './setAuthToken';


export function Proyect() {
    const [url, setUrl] = useState("http://localhost:8000/proyect/proyect");
    const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });
    const [nameEdit, setNameEdit] = useState('')

    const buttonStyle = {
        margin: '0.5%'
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // let token = localStorage.getItem("token");
        // setAuthToken(token);
        async function fetchData() {
            const consulta = await axios.get("http://localhost:8000/proyect/proyect");
            setRespuestaAPI(consulta.data);
        }
        fetchData();
    }, []);

    const MostrarRespuesta = () => {
        return Object.keys(respuestaAPI).map(key => {
            return (
                <div key={key}>
                    {key}: {JSON.stringify(respuestaAPI[key]['name'])}
                    <Button variant="outline-primary" style={buttonStyle} onClick={() => deleteProyect(JSON.stringify(respuestaAPI[key]['id']))}><MdDelete /></Button>
                    <input type='hidden' value={JSON.stringify(respuestaAPI[key]['id'])}></input>
                    <ModalCustom />
                </div>
            );
        });
    };

    const ModalCustom = () => {
        return (
            <>
                <Button variant="outline-primary" onClick={handleShow}>
                    <FaPencilAlt />
                </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar proyecto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={buttonStyle}>
                            <label>Nombre</label>
                        </div>
                        <div style={buttonStyle}>
                            <input value='' />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-primary" onClick={handleClose}>Cancelar</Button>
                        <Button variant="outline-primary" onClick={handleClose}>Guardar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const createProyect = async () => {
        async function create() {
            await axios.post('http://localhost:8000/proyect/createproyect', { data: document.getElementById('name').value })
        }
        create();
    }

    const deleteProyect = async (id) => {
        async function remove() {
            await axios.delete(`http://localhost:8000/proyect/deleteproyect/${id}`)
        }
        remove();
    }

    return (
        <div>
            <p>Proyectos</p>
            <div>
            </div>
            <input style={buttonStyle} type="text" name="name" id="name" />
            <Button variant="outline-primary" style={buttonStyle} onClick={() => createProyect()}><FaPlus /></Button>
            <MostrarRespuesta />

        </div>
    )
}