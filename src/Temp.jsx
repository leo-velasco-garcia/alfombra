import { useRef, useEffect, useContext } from "react";
import { AppContext } from './AppContext'



const Temp = () => {
    const { page, setPage,
        setSlider01,
        setSlider02,
        setProv,
        setVistas,
        setCompletadas,
        inactividad,
        setInactividad,
    } = useContext(AppContext);

    const timerRef = useRef(null);
    const warningRef = useRef(null);



    const reiniciar = () => {

        setInactividad(false);
        setSlider01(50);
        setSlider02(50);
        setProv(({
            "nombre": "Usuario anónimo",
            "fecha": "En algún lugar del tiempo",
            "respuestas": []
        }));
        setCompletadas([]);
        setVistas([]);
        setPage("Landing");
    };

    const reiniciarTemporizador = () => {
        timerRef.current? clearTimeout(timerRef.current): null;
        warningRef.current? clearTimeout(warningRef.current): null;

        timerRef.current = setTimeout(() => {
            page !== "Landing" ? reiniciar() : null;
        }, 60000); 
        warningRef.current = setTimeout(() => {
            page !== "Landing" ? setInactividad(true) : null;
        }, 50000); 
    };

    useEffect(() => {
        reiniciarTemporizador();

        const handleUserAction = () => {
            setInactividad(false);
            reiniciarTemporizador();}
        window.addEventListener("click", handleUserAction);

        return () => {
            window.removeEventListener("click", handleUserAction);
            if (timerRef.current) clearTimeout(timerRef.current);
            if (warningRef.current) clearTimeout(warningRef.current);
        };
    }, [page]);

    return (null);
};


export default Temp