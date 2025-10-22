import React from 'react'
import "./ModalDatos.css"
import Button from '../Otros/Button'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'

const ModalDatos = () => {
    const { abrir, setAbrir, setPage, prov, setProv } = useContext(AppContext);
    let clase;
    abrir == true ? clase = "ModalDatos" : clase = "oculto";
    let nombre;

    const cerrar = (ev) => {
        if (ev.target.className == "ModalDatos") {
            document.querySelector("#inputNombre").value = "";
            setAbrir(false)
        }
    }

    const loquepasa = (ev) => {
        //Crear otro objeto que modificar para no modificar directamente el useState 
        const newProv = { ...prov }
        // console.log(newProv)
        //Guardarse el nombre que ha escrito el usuario 
        nombre = document.querySelector("#inputNombre").value;
        //Escribir ese nombre en el objeto copia
        newProv.nombre = nombre
        let fecha = new Date();
        
        let min = fecha.getMinutes();
        if (min < 10){
            min = "0" + min
        }
        let hora = fecha.getHours();
        let dia = fecha.getDate();
        let month = fecha.getMonth();
        month = month + 1;
        let anio = fecha.getFullYear();
        let fechaEscrita = hora + ":" + min + " " + dia + "/" + month + "/" + anio;
        // console.log(fechaEscrita)
        newProv.fecha = fechaEscrita
        // console.log(newProv)
        setProv(newProv)

        if (document.querySelector("#inputNombre").value == "") {
            document.querySelector("#mensajeError").className = "mostrar"
        } else {
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#mensajeError").className = "hidden"
            setAbrir(false)
            setPage("Preguntas")
        }
    }

    // useEffect(() => {
    //     console.log("prov ha cambiado:", prov);
    // }, [prov]);
    return (
        <div className={clase} onClick={(ev) => cerrar(ev)}>
            <div className="ModalDatosContent">
                <form id='formulario' onSubmit={e => {
                    e.preventDefault();
                }}>
                    <label htmlFor="">¿Cómo vas a firmar tu obra?</label>
                    <input type="text" placeholder='Nombre' id='inputNombre' />
                    <span className="hidden" id='mensajeError'>¿No has escrito nada? Necesitas al menos un pseudónimo.</span>
                    <div className="buttoncontrol">
                        <Button content="Empezar mi muestra" color='#a9e9adff' type="simpleQuery" onClick={() => loquepasa()} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalDatos