import React, { useLayoutEffect, useRef } from 'react'
import Button from '../Otros/Button'
import "./Landing.css"
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { gsap } from 'gsap'
import  PixelBlast  from '../PixelBlast/PixelBlast';


const Landing = () => {
    const { page, setPage, setAbrir, pixelBlastColor, setPixelBlastColor, cambiarColorPixelBlast } = useContext(AppContext);
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
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <section ref={rootRef} className={page == "Landing" ? "landing" : "oculto"}>
            <div className="buttoncontrol">
                <Button content="Quiero crear!" onClick={() => setAbrir(true)} />
            </div>
            <div style={{ width: '100%', height: '100%', position: 'relative' }} 
                // onClick={() => cambiarColorPixelBlast()} 
                >
                <PixelBlast
                    variant="square"
                    pixelSize={10}
                    color={pixelBlastColor}
                    patternScale={1}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0}
                    liquidRadius={0}
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