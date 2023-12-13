import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import html2pdf from 'html2pdf.js'

import "../styles/contenido.css"

import ImagenPreview from "../assets/img_avatar.png"
import EducacionLogo from "../assets/education.png"
import ContactoLogo from "../assets/personal-data.png"
import ExperiencaLogo from "../assets/work-experience.png"
import Educacion from "./EducacionCV"
import EducacionForm from "./EducacionForm";
import ExperienciaForm from "./ExperienciaForm";
import Experiencia from "./ExperienciaCV";

let titulacion = "", centro = "", año = ""; //del form de educacion
let añoTrabajo = "", compañia = "", descripcion = "", posicion = ""; //del form de experiencia

export default function Contenido(){


    const[imagen, setImagen] = useState(ImagenPreview);

    const [nombre, setNombre] = useState("John Doe");
    const [profesion, setProfesion] = useState("Software developer");
    const [telefono, setTelefono] = useState("123 123 123");
    const [correo, setCorreo] = useState("hola123@gmail.com");
    const [direccion, setDireccion] = useState("Calle Paseo Victoria, número 16, 2C");
    
    const [educacion, setEducacion] = useState([]);
    const [experiencia, setExperiencia] = useState([]);
      
    if(nombre === ""){setNombre("John Doe")}

    function añadirTexto(e){
        
        switch(e.target.id)
        {
            case "nombre": setNombre(e.target.value); break;
            case "profesion": setProfesion(e.target.value); break;
            case "telefono": setTelefono(e.target.value); break;
            case "correo": setCorreo(e.target.value); break;
            case "direccion-input": setDireccion(e.target.value); break;
            case "titulacion": titulacion = e.target.value; break;
            case "centro-educativo": centro = e.target.value; break;
            case "año-finalizacion": año = e.target.value; break;
            case "año-trabajo": añoTrabajo = e.target.value; break;
            case "compañia": compañia = e.target.value; break;
            case "posicion": posicion = e.target.value; break;
            case "descripcion": descripcion = e.target.value; break;
        }
    }

    function clickAñadir() {

        if(año !== "" && titulacion !== "" && centro !== ""){
            const nuevaEducacion = {
                id: uuidv4(),
                año: año,
                titulacion: titulacion,
                centro: centro
              };
              
              setEducacion([...educacion, nuevaEducacion]);
        }
        else{
            alert("Campos vacíos")
        }
    }

    function clickEliminar(index) {
        
        const reversedEducacion = [...educacion].reverse();
        if (reversedEducacion[index + 1] && reversedEducacion[index + 1].titulacion !== undefined) {
            titulacion = reversedEducacion[index + 1].titulacion;
            const updatedEducacion = reversedEducacion.filter((_, i) => i !== index);
        
            const restoredOrder = updatedEducacion.reverse();
            setEducacion(restoredOrder);
        } else {
            const updatedEducacion = reversedEducacion.filter((_, i) => i !== index);
        
            const restoredOrder = updatedEducacion.reverse();
            setEducacion(restoredOrder);
            titulacion = "";
            document.querySelector("#form-educacion").reset();
        }
    }

    function clickAñadirExperiencia(){
        const nuevaExperiencia = {
            id: uuidv4(),
            año: añoTrabajo,
            compañia: compañia,
            posicion: posicion,
            descripcion: descripcion
          };
          
          setExperiencia([...experiencia, nuevaExperiencia]);
    }

    function clickEliminarExperiencia(index) {
        const reversedExperiencia = [...experiencia].reverse();
        if (reversedExperiencia[index + 1] && reversedExperiencia[index + 1].posicion !== undefined) {
            posicion = reversedExperiencia[index + 1].posicion;
            const updateExperiencia = reversedExperiencia.filter((_, i) => i !== index);
        
            const restoredOrder = updateExperiencia.reverse();
            setExperiencia(restoredOrder);
        } else {
            const updateExperiencia = reversedExperiencia.filter((_, i) => i !== index);
        
            const restoredOrder = updateExperiencia.reverse();
            setExperiencia(restoredOrder);
            posicion = "";
            document.querySelector("#form-experiencia").reset();
        }
    }

    function cambiarImagen(e){
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file); 

        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            setImagen(content)
         }
    }

    function cambiarImagenClick(){
        document.querySelector("#file").click();
    }

    function generarPdf(){
        const cv = document.querySelector('.cv');

        html2pdf()
            .set({
                filename: 'Curriculum - ' + nombre + '.pdf',
                margin: 1,
            })
            .from(cv)
            .save();
    }

    return(
        <div className="contenedor-generador-cv">

            <section className="constructor-cv">
                <div className="titulo-seccion">
                    <img src={ContactoLogo} alt="" />
                    <h2>Contacto</h2>
                </div>
                <form id="educacion" action="">
                    <div className="group">      
                        <input id="nombre" type="text" required onChange={añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Nombre</label>
                    </div>
                        
                    <div className="group">      
                        <input id="profesion" type="text" required onChange={añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Profesión</label>
                    </div>

                    <div className="group">      
                        <input id="telefono" type="number" required onChange={añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Teléfono</label>
                    </div>

                    <div className="group">      
                        <input id="correo" type="email" required onChange={añadirTexto} maxLength={27}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Correo</label>
                    </div>

                    <div className="group">      
                        <input id="direccion-input" type="text" required onChange={añadirTexto}/>
                        <span className="highlight"></span>
                        <span id="direccion-bar" className="bar"></span>
                        <label>Dirección</label>
                    </div>

                    <div className="group">
                        <input id="file" type="file" required onChange={cambiarImagen}/>
                    </div>
                </form>

                
                <div className="titulo-seccion">
                    <img className="secciones-logo" src={EducacionLogo} alt="" />
                    <h2>Educación</h2>
                </div>

                <EducacionForm añadirTexto={añadirTexto} clickAñadir={clickAñadir} clickEliminar={clickEliminar} index={0} titulacion={titulacion}/>

                <div className="titulo-seccion">
                    <img className="secciones-logo" src={ExperiencaLogo} alt="" />
                    <h2>Experiencia</h2>
                </div>
                <ExperienciaForm añadirTexto={añadirTexto} clickAñadir={clickAñadirExperiencia} clickEliminar={clickEliminarExperiencia} index={0} posicion={posicion}/>
            </section>

            {/*PARTE DERECHA, PREVIEW DEL CV*/}

            <section className="preview-cv">
                <div className="cv">
                    <div className="panel-izq">
                        <img className="preview-img" src={imagen} alt="imagen preview" onClick={cambiarImagenClick}/>
                        <h2>Contacto</h2>
                        <hr />
                        <h3>Teléfono</h3>
                        <p>{telefono}</p>
                        <h3>Correo</h3>
                        <p>{correo}</p>
                        <h3>Dirección</h3>
                        <p>{direccion}</p>

                        <Educacion educacion={educacion}/>
                        
                    </div>

                    <div className="panel-der">
                        <h2>{nombre}</h2>
                        <h3>{profesion}</h3>
                        <h2>Experiencia</h2>
                        <hr />
                        <Experiencia experiencia={experiencia}/>
                    </div>
                </div>

                <button onClick={generarPdf}>Descargar como pdf</button>
            </section>
        </div>
    )
}