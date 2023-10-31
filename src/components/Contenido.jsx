import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "../styles/contenido.css"
import ImagenPreview from "../assets/img_avatar.png"
import DatosPersonalesLogo from "../assets/personal-data.png"

import Educacion from "./EducacionCV"
import EducacionForm from "./EducacionForm";
import ExperienciaForm from "./ExperienciaForm";
import Experiencia from "./ExperienciaCV";

export default function Contenido(){
    let titulacion = "", centro = "", año = ""; //del form de educacion
    let añoTrabajo = "", compañia = "", descripcion = "", posicion = "";

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
        const updatedEducacion = educacion.filter((_, i) => i !== index);
        setEducacion(updatedEducacion);
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
        const updateExperiencia = experiencia.filter((_, i) => i !== index);
        setExperiencia(updateExperiencia);
      }

    return(
        <div className="contenedor-generador-cv">

            <section className="constructor-cv">
                <div className="titulo-seccion">
                    <img src={DatosPersonalesLogo} alt="" />
                    <h2>Contacto</h2>
                </div>
                <form action="">
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
                </form>

                
                <div className="titulo-seccion">
                    <img src={DatosPersonalesLogo} alt="" />
                    <h2>Educación</h2>
                </div>

                <EducacionForm añadirTexto={añadirTexto} clickAñadir={clickAñadir} clickEliminar={clickEliminar} index={0}/>

                <div className="titulo-seccion">
                    <img src={DatosPersonalesLogo} alt="" />
                    <h2>Experiencia</h2>
                </div>
                <ExperienciaForm añadirTexto={añadirTexto} clickAñadir={clickAñadirExperiencia} clickEliminar={clickEliminarExperiencia} index={0}/>
            </section>

            {/*PARTE DERECHA, PREVIEW DEL CV*/}

            <section className="preview-cv">
                <div className="cv">
                    <div className="panel-izq">
                        <img className="preview-img" src={ImagenPreview} alt="imagen preview" />
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

                <button>Descargar como pdf</button>
            </section>
        </div>
    )
}