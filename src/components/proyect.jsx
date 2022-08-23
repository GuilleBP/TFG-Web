import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { FaPlus, FaPencilAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { setAuthToken } from './setAuthToken';
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


export function Proyect() {
    const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });

    const buttonStyle = {
        marginLeft: '0.5%'
    }

    const proyectStyle = {
        marginTop: '0.5%'
    }


    useEffect(() => {
        async function fetchData() {
            const consulta = await axios.get(`http://localhost:8000/proyect/proyect/${localStorage.getItem('username')}`).catch((error) => {
                if (error.response.data === 'Forbidden' || 'Unauthorized') {
                    localStorage.clear()
                    window.location.href = "/"
                }
            });
            if (consulta !== undefined)
                setRespuestaAPI(consulta.data);
        }
        fetchData();
    }, []);

    const MostrarRespuesta = () => {
        return Object.keys(respuestaAPI).map(key => {
            return (
                <div id={key} key={key} style={proyectStyle}>
                    {respuestaAPI[key]['name']}
                    <Button variant="outline-primary" style={buttonStyle} onClick={() => deleteProyect(respuestaAPI[key]['id'])}><MdDelete /></Button>
                    {/* <Link to={`/keyword/${respuestaAPI[key]['id']}`} state= {{ from: respuestaAPI[key]['id'] }} ><Button variant="outline-primary" style={buttonStyle} id="cancel"><BsFillArrowRightCircleFill/></Button></Link> */}
                    <Link to="/keyword" state= {{ proyectId: respuestaAPI[key]['id'] }} ><Button variant="outline-primary" style={buttonStyle} id="cancel"><BsFillArrowRightCircleFill/></Button></Link>
                    <input type='hidden' value={respuestaAPI[key]['id']}></input>
                </div>
            );
        });
    };

    const createProyect = async () => {
        async function create() {
            await axios.post(`http://localhost:8000/proyect/createproyect/${localStorage.getItem('username')}`, { data: document.getElementById('name').value })
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