import "./About.css"
import { AppContext } from '../../AppContext'
import React, { useContext } from 'react'
import Button from '../Otros/Button'


const About = () => {
    const {page, setPage, abrir, setAbrir, mosaicos} = useContext(AppContext);
    return (
        <div className={page == "About" ? "sectionAbout" : "oculto"}>
            <h2 className="tituloAbout">¿Qué es <span className='naming'>Bruma</span>?</h2>
            <div className="texto">
                <p className='parrafada'> La memoria se enreda, se cose y se deshilacha. Cada palabra, una hebra; cada imagen, una puntada. Entre páginas se cruzan fragmentos de recuerdos -notas, tejidos, pensamientos- que vuelven a tomar forma, como retales de una tela antigua y recompuesta. No hay un principio ni un final, solo nudos en el tiempo que se entrelazan. Los recuerdos no se archivan, se bordan.</p>
                <p>Esta es la filosofía con la que se construye Bruma, un proyecto que busca hacerte reflexionar sobre tus recuerdos. ¿Tienes más presente tu primera vez montando en bici que el día de ayer?. Si recuerdas una estación de tren, ¿estás feliz?</p>
            </div>

            <div className="buttoncontrol">
                <Button content="¡Quiero crear!" onClick={() => setAbrir(true)}/>
            </div>
        </div>
        
    )
}

export default About