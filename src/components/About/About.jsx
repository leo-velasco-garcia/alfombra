import "./About.css";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { AppContext } from "../../AppContext";
import Button from "../Otros/Button";
import PixelTransition from '../PixelTransition/PixelTransition';

const About = () => {
    const { page, setPage, abrir, setAbrir, mosaicos } = useContext(AppContext);
    const rootRef = useRef(null);

    useLayoutEffect(() => {
        if (page !== "About") return;
        const ctx = gsap.context(() => {
            gsap.from(".sectionAbout > *", {
                opacity: 0,
                y: 16,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out",
            });
        }, rootRef);
        return () => ctx.revert();
    }, [page]);
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div
            ref={rootRef}
            className={page === "About" ? "sectionAbout" : "oculto"}
        >
            <h2 className="tituloAbout">
                ¿Cómo funciona <span className="naming">Bruma</span>?
            </h2>
            <div className="texto">
                <p className='texto'>
                    Tejidos de la forma en que podría haber zurcido tu abuela un pantalón,
                    en Bruma los recuerdos se entrelazan retratando tu memoria.
                </p>
                <p className='texto'>
                    Te proponemos una serie de momentos y sensaciones, para que vuelvas a
                    ellos y pienses en qué medida son felices y cuánto se alejan en el
                    tiempo. Cuando termines, tu muestra retrata el peso que tiene el
                    pasado frente al presente en tu memoria, al tiempo que ilustra cuánta
                    alegría baña a esos recuerdos.
                </p>
                <div className="explicacion">
                    <div className="cadaexplicacion">
                        <PixelTransition
                            firstContent={
                                <img
                                    src="../public/imgAboutVerde.svg"
                                    alt="default pixel transition content, a cat!"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "rgb(0, 50, 15)",
                                    }}
                                >
                                    <img src="../public/pruebaHilos.jpg" alt=""
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    {/* <p style={{ fontWeight: 500, fontSize: "2rem", color: "#ffffff" }}>Hilos Verticales</p> */}
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#ffffff'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                        <p className='texto'>
                            Los hilos verticales se vuelven más verdes cuanto más reciente sea
                            tu recuerdo.
                        </p>
                    </div>
                    <div className="cadaexplicacion">

                        <PixelTransition
                            firstContent={
                                <img
                                    src="../public/imgAboutRoja.svg"
                                    alt="default pixel transition content, a cat!"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "rgb(159, 41, 26)",
                                    }}
                                >
                                    <img src="../public/pruebaHilosRojos.jpg" alt=""
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    {/* <p style={{ fontWeight: 500, fontSize: "2rem", color: "#ffffff" }}>Hilos Verticales</p> */}
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#ffffff'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                        <p className='texto'>
                            Los hilos horizontales se acercan al amarillo si el recuerdo es
                            feliz, o al rojo si es triste.
                        </p>
                    </div>
                </div>
                <div className="hiloscombinados">
                    <PixelTransition
                            firstContent={
                                <img
                                    src="../public/comboCuadrados.jpg"
                                    alt="default pixel transition content, a cat!"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "rgb(159, 41, 26)",
                                    }}
                                >
                                    <img src="../public/combo.jpg" alt=""
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    {/* <p style={{ fontWeight: 500, fontSize: "2rem", color: "#ffffff" }}>Hilos Verticales</p> */}
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#ffffff'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                </div>
                <div className="buttoncontrol">
                    <Button content="¡Quiero crear!" onClick={() => setAbrir(true)} />
                </div>
            </div>
        </div>
    );
};

export default About;
