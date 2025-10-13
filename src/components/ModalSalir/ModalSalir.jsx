import React from 'react'
import "./ModalSalir.css"
import Button from '../Otros/Button'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

const ModalSalir = () => {
    const { salir, setSalir, setPage, prov, setProv, vistas, setVistas, completadas, setCompletadas } = useContext(AppContext);
    let clase;
    salir == true ? clase = "ModalSalir" : clase = "oculto";
    let nombre;

    const cerrar = (ev) => {
        if (ev.target.className == "ModalSalir") {
            setSalir(false)
        }
    }

    const limpiaYVuelve = () => {

        setVistas([])
        setCompletadas([])
        setProv({
            "nombre": "Usuario anónimo",
            "fecha": "En algún lugar del tiempo",
            "respuestas": []
        })
        setSalir(false)
        setPage("Landing")
    }

    return (
        <div className={clase} onClick={(ev) => cerrar(ev)}>
            <div className="ModalDatosContent">
                <h2 className="titulo2">¿Estás seguro que no quieres terminar tu obra?</h2>
                <div className="buttoncontrol">
                    <Button content="No, quiero seguir creando" color='#ffffffff' type="simpleQuery" onClick={() => setSalir(false)} />
                    <Button content="Sí, quiero salir" color='#ff4646ff' type="simpleQuery" onClick={() => limpiaYVuelve()} />
                </div>
            </div>
        </div>
    )
}

export default ModalSalir