import { useState } from 'react'
import './App.css'
import Cabecera from './components/Cabecera'
import Contenido from './components/Contenido'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Cabecera />
      <Contenido />
      <Footer></Footer>
    </>
  )
}

export default App
