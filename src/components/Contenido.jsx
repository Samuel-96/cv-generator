import "../styles/contenido.css"
import ImagenPreview from "../assets/img_avatar.png"
import DatosPersonalesLogo from "../assets/personal-data.png"
import { useState } from "react"

export default function Contenido(){

    const [nombre, setNombre] = useState("John Doe");
    const [profesion, setProfesion] = useState("Software developer");
    const [telefono, setTelefono] = useState("123 123 123");
    const [correo, setCorreo] = useState("hola123@gmail.com");
    const [direccion, setDireccion] = useState("Calle Paseo Victoria, número 16, 2C");
    //const [profesion, setProfesion] = useState("Software dev");

    if(nombre === ""){setNombre("John Doe")}

    function añadirTexto(e){
        switch(e.target.id)
        {
            case "nombre": setNombre(e.target.value); break;
            case "profesion": setProfesion(e.target.value); break;
            case "telefono": setTelefono(e.target.value); break;
            case "correo": setCorreo(e.target.value); break;
            case "direccion-input": setDireccion(e.target.value);
        }
        
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
                <form action="">
                    <div className="group">      
                        <input id="nombre" type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Nombre</label>
                    </div>
                </form>
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

                        <h2>Educación</h2>
                        <hr />
                    </div>

                    <div className="panel-der">
                        <h2>{nombre}</h2>
                        <h3>{profesion}</h3>
                        <h2>Experiencia</h2>
                        <hr />
                    </div>
                </div>

                <button>pdf</button>
            </section>
        </div>
    )
}