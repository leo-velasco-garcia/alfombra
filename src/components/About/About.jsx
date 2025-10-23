import "./About.css"
import { AppContext } from '../../AppContext'
import React, { useContext } from 'react'
import Button from '../Otros/Button'


const About = () => {
    const { page, setPage, abrir, setAbrir, mosaicos } = useContext(AppContext);
    return (
        <div className={page == "About" ? "sectionAbout" : "oculto"}>
            <h2 className="tituloAbout">¿Cómo funciona <span className='naming'>Bruma</span>?</h2>
            <div className="texto">
                {/* <p className='parrafada'> La memoria se enreda, se cose y se deshilacha. Cada palabra, una hebra; cada imagen, una puntada. Entre páginas se cruzan fragmentos de recuerdos -notas, tejidos, pensamientos- que vuelven a tomar forma, como retales de una tela antigua y recompuesta. No hay un principio ni un final, solo nudos en el tiempo que se entrelazan. Los recuerdos no se archivan, se bordan.</p> */}
                <p>Tejidos de la forma en que podría haber zurcido tu abuela un pantalón, en Bruma los recuerdos se entrelazan retratando tu memoria.</p>
                <p>Te proponemos una serie de momentos y sensaciones, para que vuelvas a ellos y pienses en qué medida son felices y cuánto se alejan en el tiempo. Cuando termines, tu muestra retrata el peso que tiene el pasado frente al presente en tu memoria, al tiempo que ilustra cuánta alegría baña a esos recuerdos.</p>
                <div className="explicacion">
                    <div className="cadaexplicacion">
                        <img src="../public/imgAboutVerde.svg" alt="" />
                        <p>Los hilos verticales están adquieren de verde más oscuro cuanto más reciente sea tu recuerdo.</p>
                    </div>
                    <div className="cadaexplicacion">
                        <img src="../public/imgAboutRoja.svg" alt="" />
                        <p>Mientras tanto, los hilos horizontales se acercan acercan al amarillo si el recuerdo es feliz, o al rojo más si es triste.</p>
                    </div>
                </div>

            </div>

            <div className="buttoncontrol">
                <Button content="¡Quiero crear!" onClick={() => setAbrir(true)} />
            </div>
        </div>

    )
}

export default About