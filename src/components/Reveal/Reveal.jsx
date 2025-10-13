import React from 'react'
import Button from '../Otros/Button'
import "./Reveal.css"
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import Card from '../Otros/Card'



const Reveal = () => {
    const {page, setPage, setAbrir, mosaicos} = useContext(AppContext);
    console.log(mosaicos)

    if(mosaicos.length > 0){
        return (
        <section className={page == "Reveal" ? "reveal" : "oculto"}>
            <div className="headerReveal">
                {/* <h2 className="titulo2">Reveal</h2> */}
            </div>
            <div className="contenedorCard">
                <Card nombre={mosaicos[0].nombre} fecha={mosaicos[0].fecha} respuestas={mosaicos[0].respuestas}/>
            </div>
            <div className="buttoncontrol">
                <Button content="Ver los del resto de usuarios" onClick={() => setPage("Gallery")}/>
            </div>
            </section>
    )
    }
}

export default Reveal