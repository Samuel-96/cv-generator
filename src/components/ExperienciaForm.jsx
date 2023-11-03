export default function ExperienciaForm(props){
    return(
        <form id="form-experiencia" action="">
                    <div className="group">      
                        <input id="año-trabajo" type="number" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Año</label>
                    </div>

                    <div className="group">      
                        <input id="compañia" type="text" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Compañía</label>
                    </div>

                    <div className="group">      
                        <input id="posicion" type="text" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Posición</label>
                    </div>

                    <div className="group">      
                        <textarea placeholder="Descripción del puesto de trabajo" id="descripcion" type="text" required onChange={props.añadirTexto} rows="5" cols="60"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                    </div>

                    <div className="botones-añadir-seccion">
                        <button type='button' onClick={props.clickAñadir}>Añadir sección</button>
                        <button type="button" onClick={() => props.clickEliminar(props.index)}>Eliminar {props.posicion}</button>
                    </div>
        </form>
    )
}