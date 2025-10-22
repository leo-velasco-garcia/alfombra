
import "./ModalInactividad.css"
import Button from '../Otros/Button'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'

const ModalInactividad = () => {
    const { inactividad, setInactividad, setPage, prov, setProv } = useContext(AppContext);
    let clase;
    inactividad == true ? clase = "ModalInactividad" : clase = "oculto";
    let nombre;


    // useEffect(() => {
    //     console.log("prov ha cambiado:", prov);
    // }, [prov]);
    return (
        <div className={clase}>
            <div className="ModalInactividadContent">
                <p className="tituloModal">¿Sigues ahí?</p>
                <p>Pulsa en cualquier parte de la pantalla para continuar por donde lo dejaste</p>
            </div>
        </div>
    )
}

export default ModalInactividad