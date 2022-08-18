import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from "react-router-dom";


export function Keyword() {
    const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });

    const buttonStyle = {
        marginLeft: '0.5%'
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
                <div key={key}>
                    {JSON.stringify(respuestaAPI[key]['name']).replaceAll('"', '')}
                    <Button variant="outline-primary" style={buttonStyle} onClick={() => deleteProyect(JSON.stringify(respuestaAPI[key]['id']))}><MdDelete /></Button>
                    <Link to="/keyword"><Button style={buttonStyle} id="cancel">Cancelar</Button></Link>
                    <input type='hidden' value={JSON.stringify(respuestaAPI[key]['id'])}></input>
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