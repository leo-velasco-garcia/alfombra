import React, { useContext, useState } from 'react'
import "./Header.css"
import { ArrowDown, List, X } from 'phosphor-react'
import { AppContext } from '../../AppContext'

const Header = () => {
    const { nombre, page, setPage, salir, setSalir, pixelBlastColor } = useContext(AppContext);
    const [menuAbierto, setMenuAbierto] = useState(false);

    let claseColor;
    if (pixelBlastColor == "#f1b55b") {
        claseColor = "beige";
    } else if (pixelBlastColor == "#9f291a") {
        claseColor = "rojo";
    } else {
        claseColor = "verde";
    }

    const handleLinkClick = (destino) => {
        setPage(destino);
        setMenuAbierto(false); // cerrar menú al hacer clic
    };

    return (
        <header className="header">
            <a
                href="#"
                className={page == "Landing" ? "titulo s" : "titulo n"}
                onClick={() => handleLinkClick("Landing")}
            >
                {nombre}
            </a>

            {/* Botón hamburguesa visible en móvil */}
            <button
                className="hamburguesa"
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Abrir menú"
            >
                {menuAbierto ? <X size={28} /> : <List size={28} />}
            </button>

            {/* Menú */}
            <div className={`enlaces ${menuAbierto ? 'activo' : ''}`}>
                {page !== "Preguntas" ? (
                    <>
                        <a
                            href="#"
                            className={page == "Gallery" ? "enlace enlaceseleccionado " + claseColor : "enlace " + claseColor}
                            onClick={() => handleLinkClick("Gallery")}
                        >
                            Galería
                        </a>
                        <a
                            href="#aqui"
                            className={page == "About" ? "enlace enlaceseleccionado " + claseColor : "enlace " + claseColor}
                            onClick={() => handleLinkClick("About")}
                        >
                            Cómo funciona
                        </a>
                    </>
                ) : (
                    <a
                        href="#"
                        className="enlace"
                        onClick={() => setSalir(true)}
                    >
                        Salir
                    </a>
                )}
            </div>

            {/* Fondo semitransparente (overlay) */}
            {menuAbierto && <div className="overlay" onClick={() => setMenuAbierto(false)}></div>}
        </header>
    );
};

export default Header;
