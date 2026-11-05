
import { useState } from "react"

import "../styles/contenido.css"

import ImagenPreview from "../assets/img_avatar.png"
import EducacionLogo from "../assets/education.png"
import ContactoLogo from "../assets/personal-data.png"
import ExperiencaLogo from "../assets/work-experience.png"
import Educacion from "./EducacionCV"
import EducacionForm from "./EducacionForm"
import ExperienciaForm from "./ExperienciaForm"
import Experiencia from "./ExperienciaCV"

export default function Contenido() {

    const [imagen, setImagen] = useState(ImagenPreview)

    const [nombre, setNombre] = useState("John Doe")
    const [profesion, setProfesion] = useState("Software developer")
    const [telefono, setTelefono] = useState("123 123 123")
    const [correo, setCorreo] = useState("tu_correo@hotmail.com")
    const [direccion, setDireccion] = useState("Calle Paseo Victoria, número 16, 2C")

    const [educacion, setEducacion] = useState([])
    const [experiencia, setExperiencia] = useState([])

    const [titulacion, setTitulacion] = useState("")
    const [centro, setCentro] = useState("")
    const [año, setAño] = useState("")

    const [añoTrabajo, setAñoTrabajo] = useState("")
    const [compañia, setCompañia] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [posicion, setPosicion] = useState("")

    const [generandoPdf, setGenerandoPdf] = useState(false)

    function añadirTexto(e) {
        switch (e.target.id) {
            case "nombre": setNombre(e.target.value); break
            case "profesion": setProfesion(e.target.value); break
            case "telefono": setTelefono(e.target.value); break
            case "correo": setCorreo(e.target.value); break
            case "direccion-input": setDireccion(e.target.value); break

            case "titulacion": setTitulacion(e.target.value); break
            case "centro-educativo": setCentro(e.target.value); break
            case "año-finalizacion": setAño(e.target.value); break

            case "año-trabajo": setAñoTrabajo(e.target.value); break
            case "compañia": setCompañia(e.target.value); break
            case "posicion": setPosicion(e.target.value); break
            case "descripcion": setDescripcion(e.target.value); break
        }
    }

    function clickAñadir() {
        if (!camposCompletos(año, titulacion, centro)) {
            alert("Todos los campos son obligatorios")
            return
        }

        const nuevaEducacion = {
            id: crypto.randomUUID(),
            año,
            titulacion,
            centro
        }

        setEducacion(prevEducacion => [...prevEducacion, nuevaEducacion])
    }

    function clickEliminar() {
        const updatedEducacion = educacion.slice(0, -1)

        setEducacion(updatedEducacion)

        if (updatedEducacion.length > 0) {
            const ultimaEducacion = updatedEducacion[updatedEducacion.length - 1]

            setTitulacion(ultimaEducacion.titulacion)
            setCentro(ultimaEducacion.centro)
            setAño(ultimaEducacion.año)
        } else {
            setTitulacion("")
            setCentro("")
            setAño("")
        }
    }

    function clickAñadirExperiencia() {
        if (!camposCompletos(añoTrabajo, compañia, posicion)) {
            alert("El año, la compañía y el puesto son obligatorios")
            return
        }

        const nuevaExperiencia = {
            id: crypto.randomUUID(),
            año: añoTrabajo,
            compañia,
            posicion,
            descripcion
        }

        setExperiencia(prevExperiencia => [...prevExperiencia, nuevaExperiencia])
    }

    function clickEliminarExperiencia() {
        const updatedExperiencia = experiencia.slice(0, -1)

        setExperiencia(updatedExperiencia)

        if (updatedExperiencia.length > 0) {
            const ultimaExperiencia = updatedExperiencia[updatedExperiencia.length - 1]

            setAñoTrabajo(ultimaExperiencia.año)
            setCompañia(ultimaExperiencia.compañia)
            setPosicion(ultimaExperiencia.posicion)
            setDescripcion(ultimaExperiencia.descripcion)
        } else {
            setAñoTrabajo("")
            setCompañia("")
            setPosicion("")
            setDescripcion("")
        }
    }

    function cambiarImagen(e) {
        const file = e.target.files[0]

        if (!file) return

        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = readerEvent => {
            setImagen(readerEvent.target.result)
        }
    }

    function cambiarImagenClick() {
        document.querySelector("#file").click()
    }

    async function generarPdf() {
        const formulario = document.querySelector("#form-contacto")

        if (!formulario.reportValidity()) {
            return
        }

        setGenerandoPdf(true)

        try {
            const { default: html2pdf } = await import("html2pdf.js")
            const cv = document.querySelector(".cv")

            const opciones = {
                filename: `Curriculum - ${nombre}.pdf`,
                margin: 5,
                image: {type: "png"},
                html2canvas: { scale: 3, useCORS: true, scrollY: 0 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
                pagebreak: {
                    mode: ["css", "legacy"],
                    avoid: [".educacion-item", ".experiencia-item"]
                }
            }

            await html2pdf()
                .set(opciones)
                .from(cv)
                .save()

        } catch (error) {
            console.error("Error al generar el PDF:", error)
            alert("No se ha podido generar el PDF.")

        } finally {
            setGenerandoPdf(false)
        }
    }

    return (
        <div className="contenedor-generador-cv">

            <section className="constructor-cv">
                <div className="titulo-seccion">
                    <img src={ContactoLogo} alt="" />
                    <h2>Contacto</h2>
                </div>

                <form id="form-contacto">
                    <div className="group">
                        <input id="nombre" type="text" required value={nombre} onChange={añadirTexto} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="nombre">Nombre</label>
                    </div>

                    <div className="group">
                        <input id="profesion" type="text" required value={profesion} onChange={añadirTexto} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="profesion">Profesion</label>
                    </div>

                    <div className="group">
                        <input
                            id="telefono"
                            type="tel"
                            required
                            value={telefono}
                            onChange={añadirTexto}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="telefono">Telefono</label>
                    </div>

                    <div className="group">
                        <input id="correo" type="email" required value={correo} onChange={añadirTexto} maxLength={27} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="correo">Correo</label>
                    </div>

                    <div className="group">
                        <input id="direccion-input" type="text" required value={direccion} onChange={añadirTexto} />
                        <span className="highlight"></span>
                        <span id="direccion-bar" className="bar"></span>
                        <label htmlFor="direccion-input">Direccion</label>
                    </div>

                    <div className="group">
                        <input id="file" type="file" accept="image/*" onChange={cambiarImagen} />
                    </div>
                </form>

                <div className="titulo-seccion">
                    <img className="secciones-logo" src={EducacionLogo} alt="" />
                    <h2>Educación</h2>
                </div>

                <EducacionForm
                    añadirTexto={añadirTexto}
                    clickAñadir={clickAñadir}
                    clickEliminar={clickEliminar}
                    titulacion={titulacion}
                    centro={centro}
                    año={año}
                />

                <div className="titulo-seccion">
                    <img className="secciones-logo" src={ExperiencaLogo} alt="" />
                    <h2>Experiencia</h2>
                </div>

                <ExperienciaForm
                    añadirTexto={añadirTexto}
                    clickAñadir={clickAñadirExperiencia}
                    clickEliminar={clickEliminarExperiencia}
                    posicion={posicion}
                    añoTrabajo={añoTrabajo}
                    compañia={compañia}
                    descripcion={descripcion}
                />
            </section>

            {/* PREVIEW DEL CV */}

            <section className="preview-cv">
                <div className="cv">
                    <div className="panel-izq">
                        <img
                            className="preview-img"
                            src={imagen}
                            alt="imagen preview"
                            onClick={cambiarImagenClick}
                        />

                        <h2>Contacto</h2>
                        <hr />

                        <h3>Teléfono</h3>
                        <p>{telefono}</p>

                        <h3>Correo</h3>
                        <p>{correo}</p>

                        <h3>Dirección</h3>
                        <p>{direccion}</p>

                        <Educacion educacion={educacion} />
                    </div>

                    <div className="panel-der">
                        <h2>{nombre}</h2>
                        <h3>{profesion}</h3>

                        <h2>Experiencia</h2>
                        <hr />

                        <Experiencia experiencia={experiencia} />
                    </div>
                </div>

                <button onClick={generarPdf} disabled={generandoPdf}>
                    {generandoPdf && <span className="spinner" aria-hidden="true"></span>}
                    {generandoPdf ? "Generando PDF..." : "Descargar como PDF"}
                </button>
            </section>
        </div>
    )
}

function camposCompletos(...campos) {
    return campos.every(campo => campo.trim() !== "")
}
