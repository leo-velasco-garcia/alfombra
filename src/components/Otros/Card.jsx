import React from 'react'
import "./Card.css"
import { useContext } from 'react';
import { AppContext } from '../../AppContext'

const Card = ({ nombre, fecha, respuestas, nuevoV }) => {

    const {page, colores} = useContext(AppContext);
    function interpolateColor(aa, bb, cc, dd, ee, ff, p, q) {

        let nuevoR = Math.round(aa + (dd - aa) * p);
        let nuevoG = Math.round(bb + (ee - bb) * p);
        let nuevoB = Math.round(cc + (ff - cc) * p);

        return (`${nuevoR}, ${nuevoG}, ${nuevoB}`);
    }

    const verticales = (respuestas) => {
        return (
            respuestas.map(
                (sub, i) =>

                    // Condicional que hace una cosa u otra si la vez que lo estas recorriendo (que lo sabes al dividir la i entre 2) es par o impar
                    i % 2 == 0 ? respuestas.map((sub, j) => (

                        // Cuando i es par vuelve a recorrer el array. En este caso se pregunta si la vez que lo recorre es par o impar (con j) para saltarse uno (porque tiene que ir de dos en dos)
                        j % 2 == 0 ?
                            <div style={{ gridArea: (j + 1) + " / " + (i + 1) + " / " + (j + 2) + " / " + (i + 2), backgroundColor: "rgb(" + interpolateColor(colores[0], colores[1], colores[2], colores[3], colores[4], colores[5],  respuestas[i][0]) + ")" }} key={j + i} ></div>
                            : null
                    )
                    ) : respuestas.map((sub, j) => (
                        ((j + 1) < respuestas.length) && (j % 2 == 0) ?
                            <div style={{ gridArea: (j + 2) + " / " + (i + 1) + " / " + (j + 3) + " / " + (i + 2), backgroundColor: "rgb(" + interpolateColor(colores[0], colores[1], colores[2], colores[3], colores[4], colores[5],  respuestas[i][0]) + ")" }} key={j + i} ></div>
                            : null
                    )
                    )
            )

        )
    }
    
    const horizontales = (respuestas) => {
        return (
            respuestas.map(
                (sub, i) =>

                    // Condicional que hace una cosa u otra si la vez que lo estas recorriendo (que lo sabes al dividir la i entre 2) es par o impar
                    i % 2 == 0 ? respuestas.map((sub, j) => (

                        // Cuando i es par vuelve a recorrer el array. En este caso se pregunta si la vez que lo recorre es par o impar (con j) para saltarse uno (porque tiene que ir de dos en dos)
                        
                        ((j + 1) < respuestas.length) && (j % 2 == 0) ?
                            <div style={{ gridArea: (i + 1) + " / " + (j + 2) + " / " + (i + 2) + " / " + (j + 3), backgroundColor: "rgb(" + interpolateColor(colores[6], colores[7], colores[8], colores[9], colores[10], colores[11], respuestas[i][1]) + ")" }} key={j + i} ></div>
                            : null
                    )
                    ) : respuestas.map((sub, j) => (
                        j % 2 == 0 ?
                            <div style={{ gridArea: (i + 1) + " / " + (j + 1) + " / " + (i + 2) + " / " + (j + 2), backgroundColor: "rgb(" + interpolateColor(colores[6], colores[7], colores[8], colores[9], colores[10], colores[11], respuestas[i][1]) + ")" }} key={j + i} ></div>
                            : null
                    )
                    )
            )
        )
    }

    const pad = () => {
        if (page == "Gallery") {
            return(1)
        }  else{
            return(0)
        }
    }

    return (
        <div className='card' style={{padding: pad() + "rem"}}>
            <div className="imgCard" style={{ display: "grid", gridTemplateColumns: "repeat(" + respuestas.length + ", 1fr)", gridTemplateRows: "repeat(" + respuestas.length + ", 1fr)" }}>

                {/* Recorrer el array de respuestas */}
                {verticales(respuestas)}
                {horizontales(respuestas)}
            </div>
            <div className="descripcionCard">
                <span className="cardSpan nombreCard">{nombre}</span>
                <span className="cardSpan fechaCard">{fecha}</span>
            </div>
        </div>
    )
}

export default Card