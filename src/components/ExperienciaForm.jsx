export default function ExperienciaForm(props){
    return(
        <form action="">
                    <div className="group">      
                        <input id="año-trabajo" type="numer" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Año</label>
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
                        <input id="descripcion" type="number" required onChange={props.añadirTexto}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label >Descripción</label>
                    </div>

                    <div className="botones-añadir-seccion">
                        <button type='button' onClick={props.clickAñadir}>Añadir sección</button>
                        <button type="button" onClick={() => props.clickEliminar(props.index)}>Eliminar</button>
                    </div>
        </form>
    )
}