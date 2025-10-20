import React, { useLayoutEffect, useRef } from 'react';
import Button from '../Otros/Button';
import "./Landing.css";
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { gsap } from 'gsap';
import PixelBlast from '../PixelBlast/PixelBlast';


const Landing = () => {
    const { page, setPage, setAbrir } = useContext(AppContext);
    const rootRef = useRef(null)

    useLayoutEffect(() => {
        if (page !== 'Landing') return;
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
                <Button content="Quiero crear!" onClick={() => setAbrir(true)} />
            </div>

            <div style={{ width: '100%', height: '600px', position: 'relative', zIndex: "999",}}>
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
            </div>
        </section>
    )
}

export default Landing