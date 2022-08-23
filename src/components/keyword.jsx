import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link, useLocation } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useParams } from "react-router-dom";

export function Keyword() {
    const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });

    const buttonStyle = {
        marginLeft: '0.5%'
    }

    const location = useLocation();
    const { proyectId } = location.state;
    console.log(proyectId);

    useEffect(() => {
        async function fetchData() {
            const consulta = await axios.get(`http://localhost:8000/keyword/keyword/${proyectId}`).catch((error) => {
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
                    {respuestaAPI[key]['word']}
                    <input type='hidden' value={respuestaAPI[key]['id']}></input>
                </div>
            );
        });
    };

    const createProyect = async () => {
        async function create() {
            await axios.post(`http://localhost:8000/keyword/keyword`,
                {
                    data: {
                        proyectId: proyectId,
                        keyword: {
                            0: 'hola',
                            1: 'adios',
                            2: 'que tal'
                        },
                        text: 'hola adios que tal este es mi texto'
                    }
                })
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
            <p>Palabras clave</p>
            <div>
            </div>
            <input style={buttonStyle} type="text" name="name" id="name" />
            <Button variant="outline-primary" style={buttonStyle} onClick={() => createProyect()}><FaPlus /></Button>
            <MostrarRespuesta />
        </div>
    )
}