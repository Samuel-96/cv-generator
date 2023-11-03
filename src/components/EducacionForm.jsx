import Educacion from "./EducacionCV"

export default function EducacionForm(props){
    return(
        <form id="form-educacion" action="">
                    <div className="group">      
                        <input id="titulacion" type="text" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Titulación</label>
                    </div>

                    <div className="group">      
                        <input id="centro-educativo" type="text" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Centro</label>
                    </div>

                    <div className="group">      
                        <input id="año-finalizacion" type="number" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Año</label>
                    </div>

                    <div className="botones-añadir-seccion">
                        <button type='button' onClick={props.clickAñadir}>Añadir sección</button>
                        <button type="button" onClick={() => props.clickEliminar(props.index)}>Eliminar {props.titulacion}</button>
                    </div>
        </form>
    )
}