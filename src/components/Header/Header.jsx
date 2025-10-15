import React from 'react'
import "./Header.css"
import { ArrowDown } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

const Header = () => {
    const {page, setPage, salir, setSalir} = useContext(AppContext);
    return (
        <header className="header">
            {/* <h1 className="titulo">Alfombra</h1> */}
            <a href="#"  className={page == "Landing"? "titulo s" : "titulo n"} onClick={() => setPage("Landing")}>Nethera</a>
            <div className="enlaces">
                {page !== "Preguntas" ? <a href="#"  className={page == "Gallery"? "enlace enlaceseleccionado" : "enlace"} onClick={() => page !== "Preguntas" ? setPage("Gallery"):null }>Galería</a>: null}
                {page !== "Preguntas" ? <a href="#"  className={page == "About"? "enlace enlaceseleccionado" : "enlace"} onClick={() => page !== "Preguntas" ? setPage("About"):null}>Sobre el proyecto</a>: null}
                {page == "Preguntas" ? <a href="#"  className={"enlace"} onClick={() => setSalir(true)}>Salir</a>: null}
            </div>
        </header>
    )
}

export default Header