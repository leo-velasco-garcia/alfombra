import React, { use, useEffect } from 'react'
import Button from '../Otros/Button'
import "./Preguntas.css"
import { Alert, Slider } from '@mui/material'
import { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'



const Preguntas = () => {

    const {
        page, setPage,
        num, setNum,
        prov, setProv,
        listaPreguntas,
        slider01, setSlider01,
        slider02, setSlider02,
        completadas, setCompletadas,
        vistas, setVistas,
        mosaicos, setMosaicos,
    } = useContext(AppContext);

    const copiaProv = { ...prov };




    const getRandomNotIn = (length, excluded) => {
        if (excluded.length >= length) return null; // todas completadas
        let posibleNum;
        do {
            posibleNum = Math.floor(Math.random() * length);
        } while (excluded.includes(posibleNum));
        return posibleNum;
    };


    useEffect(() => {
        const inicial = getRandomNotIn(listaPreguntas.length, []);
        if (inicial !== null) {
            setNum(inicial);
            setCompletadas([]);
        }
    }, [listaPreguntas.length]);



    // useEffect(() => {
    //     console.log("prov ha cambiado:", prov);
    // }, [prov]);





    const siguientePregunta = (x, y) => {
        const copiaVistas = [...vistas];
        const copiaCompletadas = [...completadas];

        if (!copiaVistas.includes(num)) {

            if (y == "guardar") {
                copiaCompletadas.push(num);
            }

            copiaVistas.push(num);
        }

        const posibleNum = getRandomNotIn(x.length, copiaVistas);

        if (posibleNum === null) {
            document.querySelector(".titulo2").innerHTML = "Wow, has terminado todas nuestras preguntas"
        }

        setVistas(copiaVistas);
        setCompletadas(copiaCompletadas);
        setNum(posibleNum);

        y == "guardar" ? guardarSliders() : null;

        setSlider01(50);
        setSlider02(50);
    }




    const guardarSliders = () => {
        const miniArray = [(slider01 / 100), (slider02 / 100)]
        // console.log(copiaProv.respuestas)
        copiaProv.respuestas.push(miniArray)
        // console.log(copiaProv.respuestas)
    }




    const guardarProv = () => {

        

        setProv(copiaProv);
        let copiaMosaicos = [...mosaicos];
        copiaMosaicos.unshift(prov);
        setMosaicos(copiaMosaicos);
        setVistas([])
        setCompletadas([])
        setPage("Reveal")
        setProv({
            "nombre": "Usuario anónimo",
            "fecha": "En algún lugar del tiempo",
            "respuestas": []
        })
    }




    useEffect(() => {
        console.log(prov)
    }, [prov]
    )

    useEffect(() => {
        console.log(mosaicos)
    }, [mosaicos]
    )





    return (
        <section className={page == "Preguntas" ? "preguntas" : "oculto"}>
            <span>{completadas.length} pregunta{completadas.length !== 1 ? "s" : ""} completada{completadas.length !== 1 ? "s" : ""}. {completadas.length < 8 ? "Necesitas al menos " + (8 - completadas.length) + " más para crear una alfombra" : " Puedes crear la alfombra cuando quieras."}</span>
            <div className="headerPreguntas">
                <h2 className="titulo2">Recuerda...</h2>
                <p className='parrafo'>{"..." + listaPreguntas[num] + "."}</p>
            </div>
            
            <div className="sliders">
                <div className="slider">
                    <span className='label labelIzq'>Triste</span>
                    <Slider value={slider01} aria-label="Disabled" track={false} onChange={(ev) => setSlider01(ev.target.value)} />
                    <span className='label'>Feliz</span>
                </div>
                <div className="slider">
                    <span className='label labelIzq'>Pasado</span>
                    <Slider value={slider02} aria-label="Disabled" track={false} onChange={(ev) => setSlider02(ev.target.value)} />
                    <span className='label'>Presente</span>
                </div>
            </div>
            <div className="botones">
                <Button content="Saltar pregunta" color='#e9caa9ff' onClick={() => siguientePregunta(listaPreguntas, "a")} />
                <Button content="Guardar respuesta e ir a la siguiente pregunta" color='#c0e9a9ff' onClick={() => siguientePregunta(listaPreguntas, "guardar")} />
                {completadas.length >= 8 ? <Button content="Finalizar cuestionario" color='#a9cce9ff' onClick={() => guardarProv()} /> : null}
            </div>
        </section>
    )
}

export default Preguntas