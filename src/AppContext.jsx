import { createContext, useEffect } from "react";
import React, { useState } from 'react'

export const AppContext = createContext(null);
export const AppContextProvider = (props) => {

    const [page, setPage] = useState("Gallery");
    const [num, setNum] = useState();
    const [slider01, setSlider01] = useState(50)
    const [slider02, setSlider02] = useState(50)
    const [abrir, setAbrir] = useState(false)
    const [salir, setSalir] = useState(false)
    const [vistas, setVistas] = useState([]);
    const [completadas, setCompletadas] = useState([]);
    const [mosaicos, setMosaicos] = useState([{"nombre": "ZAZO",
            "fecha": "13:01 13/10/2025",
            "respuestas": [[1, 1], [0,0], [0.26, 0.26], [0.43, 0.24], [0.77, 1], [1, 0], [0.68, 0.2], [0.04, 0.24], [0.35, 0.7], [0.98, 0.75]]},
            {"nombre": "javi",
            "fecha": "00:54 12/10/2025",
            "respuestas": [[0.36, 0.28], [0.78,0.66], [0.96, 0.98], [0.89, 0.85], [0.75, 0.69], [0.64, 0.66], [0.6, 0.61], [0.43, 0.36], [0.23, 0.7], [0.76, 0.75], [0.96, 0.95], [0.32, 0.99],[0.04, 0.17], [0.56, 0.73],[0.95,0.98], [0.98, 0.99], [0.99,0.99], [0.9,0.85]]},
            {"nombre": "Leo",
            "fecha": "00:40 12/10/2025",
            "respuestas": [[0.53, 0.77], [0.37,0.43], [0.77, 0.81], [0.46, 0.94], [0.39, 0.96], [1, 0.6576], [0.38, 0.05], [0.26, 0.92]]}])
    const [prov, setProv] = useState({"nombre": "Usuario anónimo",
            "fecha": "En algún lugar del tiempo",
            "respuestas": []})


    
    useEffect(() =>{
        const estadoLocal = JSON.parse(localStorage.getItem("almacenaje"))
        if (estadoLocal){
            setMosaicos(estadoLocal.mosaicos)
        }
    }, [])

    const guardarDatos = () => {
        let fecha = new (Date);
        let fechaEscrita = fecha.getDay() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        // console.log(fechaEscrita)
        let guardadoProvisional = {
            "nombre": "Usuario anónimo",
            "fecha": "fechaEscrita",
            "respuestas": []
        };
    }

    let listaPreguntas = [
        "el olor a tierra mojada",
        "el sonido de la lluvia",
        "el tacto de la arena",
        "el sabor de una comida casera",
        "el calor del sol en la piel",
        "el sonido de unas llaves abriendo una puerta",
        "un viaje en coche",
        "una canción que te haya marcado",
        "la sensación de esperar a algo o a alguien",
        "una promesa",
        "tu reflejo en un espejo",
        "un libro especial para ti",
        "una ventana abierta",
        "un atardecer",
        "un camino en el bosque",
        "el movimiento de las olas del mar",
        "una tormenta acercándose",
        "un sueño del que no te olvidas",
        "una sorpresa",
        "un momento de soledad",
        "la sensación de volver a casa",
        "subir una escalera",
        "hacer una maleta",
        "cruzar un puente",
        "una habitación vacía",
        "las luces de una ciudad a lo lejos",
        "estar mirando un mapa",
        "atravesar un pasillo largo",
        "cruzar una frontera",
        "una conversación por teléfono",
        "la sensación de llegar justo a tiempo",
        "estar despierto mientras otros duermen",
        "un banco en un parque",
        "el ruido de una nevera",
        "una pila de libros",
        "una caja cerrada",
        "flotar en el agua"
    ]

    const value = {
        page, setPage,
        num, setNum,
        slider01, setSlider01,
        slider02, setSlider02,
        abrir, setAbrir,
        salir, setSalir,
        prov, setProv,
        vistas, setVistas,
        completadas, setCompletadas,
        guardarDatos,
        mosaicos, setMosaicos,
        listaPreguntas
    };

    useEffect(() =>{
        localStorage.setItem("almacenaje", JSON.stringify({
            mosaicos
        }))
    }, [mosaicos])

    console.log(mosaicos)

    return (<AppContext.Provider value={value}>
        {props.children} 
        {/* <p>{count}</p> */}
    </AppContext.Provider>);
}

