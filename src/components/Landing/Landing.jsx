import React, { useLayoutEffect, useRef } from 'react'
import Button from '../Otros/Button'
import "./Landing.css"
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { gsap } from 'gsap'


const Landing = () => {
    const {page, setPage, setAbrir} = useContext(AppContext);
    const rootRef = useRef(null)

    useLayoutEffect(() => {
        if(page !== 'Landing') return;
        const ctx = gsap.context(() => {
            gsap.from([".headerLanding .titulo2", ".buttoncontrol"], {
                opacity: 0,
                y: 24,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.15
            })
        }, rootRef)
        return () => ctx.revert()
    }, [page])

    return (
        <section ref={rootRef} className={page == "Landing" ? "landing" : "oculto"}>
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