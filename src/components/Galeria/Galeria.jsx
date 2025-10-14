import React, { useContext } from 'react'
import "./Galeria.css"
import Card from '../Otros/Card'
import Button from '../Otros/Button'
import { AppContext } from '../../AppContext'

const Galeria = () => {
    const {info, page, setPage, abrir, setAbrir, mosaicos} = useContext(AppContext);
    return (
        <section className={page == "Gallery" ? "galeria" : "oculto"}>
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