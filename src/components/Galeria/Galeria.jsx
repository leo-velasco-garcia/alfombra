import React, { useContext, useLayoutEffect, useRef } from 'react'
import "./Galeria.css"
import Card from '../Otros/Card'
import Button from '../Otros/Button'
import { AppContext } from '../../AppContext'
import { gsap } from 'gsap'

const Galeria = () => {
    const {info, page, setPage, abrir, setAbrir, mosaicos} = useContext(AppContext);
    const rootRef = useRef(null)

    useLayoutEffect(() => {
        if(page !== 'Gallery') return;
        const ctx = gsap.context(() => {
            gsap.from(".galeria .content > *", { opacity: 0, y: 16, duration: .4, stagger: .05, ease: "power2.out" })
        }, rootRef)
        return () => ctx.revert()
    }, [page, mosaicos.length])

    return (
        <section ref={rootRef} className={page == "Gallery" ? "galeria" : "oculto"}>
            <div className="headerGaleria">
                <h2 className="titulo2">Galería</h2>
            </div>
            <div className="content">
                
                {mosaicos.length > 0 ? 
                mosaicos.map((mosaico, i) => <Card nombre={mosaico.nombre} fecha={mosaico.fecha} respuestas={mosaico.respuestas} key={i}/>) :
                <span>Todavía no hay mosaicos</span>}
            </div>
            <div className="buttoncontrol">
                <Button content="Quiero crear!" onClick={() => setAbrir(true)}/>
            </div>
        </section>
    )
}

export default Galeria