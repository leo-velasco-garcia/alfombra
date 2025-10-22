import React, { useState, useContext, useEffect } from 'react'
import Header from './components/Header/Header'
import Galeria from './components/GalerIa/Galeria'
import './App.css'
import Landing from './components/Landing/Landing'
import Preguntas from './components/Preguntas/Preguntas'
import ModalDatos from './components/ModalDatos/ModalDatos'
import ModalSalir from './components/ModalSalir/ModalSalir'
import { AppContext } from './AppContext'
import Reveal from './components/Reveal/Reveal'
import ModalInactividad from './components/ModalInactividad/ModalInactividad'

// console.log(styles)

const App = () => {

  const { abrir, setAbrir, page, setPage, num, setNum, listaPreguntas, slider01, setSlider01, slider02, setSlider02, cambiarNum, mosaicos } = useContext(AppContext);

  

  return (
    <div className="wrapper">
      <ModalDatos />
      <ModalInactividad />
      <ModalSalir />
      <Header />
      <div className="colocador">
        <Galeria />
        <Landing />
        <Preguntas />
        <Reveal />
      </div>
    </div>
  )
}


export default App