import React from 'react'
import Button from '../Otros/Button'
import "./Landing.css"
import { useContext } from 'react'
import { AppContext } from '../../AppContext'


const Landing = () => {
    const {page, setPage, setAbrir} = useContext(AppContext);
    return (
        <section className={page == "Landing" ? "landing" : "oculto"}>
            <div className="headerLanding">
                <h2 className="titulo2">Landing</h2>
            </div>
            <div className="buttoncontrol">
                <Button content="Quiero crear!" onClick={() => setAbrir(true)}/>
            </div>
            </section>
    )
}

export default Landing