import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import Button from '../Otros/Button'
import "./Landing.css"
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { gsap } from 'gsap'
import PixelBlast from '../PixelBlast/PixelBlast';
import TextPressure from '../TextPressure/TextPressure';
import '../TextPressure/TextPressure.css';



const Landing = () => {
    const { page, setPage, setAbrir, pixelBlastColor, setPixelBlastColor, cambiarColorPixelBlast } = useContext(AppContext);
    const rootRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

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
                <Button content="¡Quiero crear!" onClick={() => setAbrir(true)} />
            </div>
            <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
            // onClick={() => cambiarColorPixelBlast()} 
            >
                <PixelBlast
                    variant="square"
                    pixelSize={10}
                    color={pixelBlastColor}
                    patternScale={2}
                    patternDensity={0.6}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1}
                    liquid
                    liquidStrength={0}
                    liquidRadius={0}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.0}
                    transparent
                />
                <div className="textpressurecontent">
                    <div className="text-pressure-container">
                        <TextPressure
                            text="Bruma"
                            fontFamily="PF Pixelscript"
                            textTransform="none"
                            flex={false}
                            alpha={false} //animacion de opacidad//
                            stroke={false}
                            width={false}
                            weight={false}
                            italic={true}
                            textColor="#000000"
                            strokeColor="#ff0000"
                            minFontSize={isMobile ? 32 : 48}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing