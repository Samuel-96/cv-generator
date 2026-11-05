import PropTypes from "prop-types";

export default function ExperienciaForm({
    añadirTexto,
    clickAñadir,
    clickEliminar,
    posicion,
    añoTrabajo,
    compañia,
    descripcion
}) {
    return (
        <form id="form-experiencia">
            <div className="group">
                <input
                    id="año-trabajo"
                    type="number"
                    value={añoTrabajo}
                    min="1900"
                    max={new Date().getFullYear() + 10}
                    step="1"
                    required
                    onChange={añadirTexto}
                />
                <label htmlFor="año-trabajo">Año</label>
            </div>

            <div className="group">
                <input
                    id="compañia"
                    type="text"
                    value={compañia}
                    required
                    onChange={añadirTexto}
                />
                <label htmlFor="compañia">Compañía</label>
            </div>

            <div className="group">
                <input
                    id="posicion"
                    type="text"
                    value={posicion}
                    required
                    onChange={añadirTexto}
                />
                <label htmlFor="posicion">Posición</label>
            </div>

            <div className="group">
                <textarea
                    id="descripcion"
                    value={descripcion}
                    required
                    onChange={añadirTexto}
                    rows="5"
                    placeholder="Describe brevemente tus responsabilidades y logros"
                />

            </div>

            <div className="botones-añadir-seccion">
                <button type="button" onClick={clickAñadir}>
                    Añadir sección
                </button>

                <button type="button" onClick={clickEliminar}>
                    Eliminar {posicion || "última experiencia"}
                </button>
            </div>
        </form>
    );
}

ExperienciaForm.propTypes = {
    añadirTexto: PropTypes.func.isRequired,
    clickAñadir: PropTypes.func.isRequired,
    clickEliminar: PropTypes.func.isRequired,
    posicion: PropTypes.string.isRequired,
    añoTrabajo: PropTypes.string.isRequired,
    compañia: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
};
