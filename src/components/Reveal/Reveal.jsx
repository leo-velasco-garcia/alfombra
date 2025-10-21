import React, { useLayoutEffect, useRef } from 'react'
import Button from '../Otros/Button'
import "./Reveal.css"
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import Card from '../Otros/Card'
import { gsap } from 'gsap'



const Reveal = () => {
    const { page, setPage, setAbrir, mosaicos } = useContext(AppContext);
    const rootRef = useRef(null)

    useLayoutEffect(() => {
        if (page !== 'Reveal') return;
        const ctx = gsap.context(() => {
            gsap.from([".contenedorCard", ".buttoncontrol"], { opacity: 0, y: 16, duration: .5, stagger: .1, ease: "power2.out" })
        }, rootRef)
        return () => ctx.revert()
    }, [page, mosaicos.length])

    return (
        <section ref={rootRef} className={page == "Reveal" ? "reveal" : "oculto"}>
            <div className="headerReveal"></div>
            <div className="contenedorCard">
                {mosaicos.length > 0 ? (
                    <Card nombre={mosaicos[0].nombre} fecha={mosaicos[0].fecha} respuestas={mosaicos[0].respuestas} />
                ) : (
                    <div className="placeholder">
                        <p className="small-caps">Aún no hay alfombra para mostrar</p>
                        <Button content="Crear la primera" onClick={() => setPage("Preguntas")} />
                    </div>
                )}
                <div className="leyendayboton">
                    <div className="leyendacolores">
                        <div className="La1">
                            <div className="color1"></div>
                            <span>Triste</span>
                        </div>
                        <div className="La2">
                            <div className="color2"></div>
                            <span>Feliz</span>
                        </div>
                        <div className="La3">
                            <div className="color3"></div>
                            <span>Pasado</span>
                        </div>
                        <div className="La4">
                            <div className="color4"></div>
                            <span>Presente</span>
                        </div>
                        <div className="La5">
                            <div className="color5"></div>
                            <span>Triste - Feliz</span>
                        </div>
                        <div className="La6">
                            <div className="color6"></div>
                            <span>Pasado - Presente</span>
                        </div>
                    </div>
                    <div className="buttoncontrol">
                        <Button content="Ver los del resto de usuarios" onClick={() => setPage("Gallery")} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Reveal