import PropTypes from "prop-types";

export default function EducacionForm({
    añadirTexto,
    clickAñadir,
    clickEliminar,
    titulacion,
    centro,
    año
}) {
    return (
        <form id="form-educacion">
            <div className="group">
                <input
                    id="titulacion"
                    type="text"
                    value={titulacion}
                    required
                    onChange={añadirTexto}
                />
                <label htmlFor="titulacion">Titulación</label>
            </div>

            <div className="group">
                <input
                    id="centro-educativo"
                    type="text"
                    value={centro}
                    required
                    onChange={añadirTexto}
                />
                <label htmlFor="centro-educativo">Centro</label>
            </div>

            <div className="group">
                <input
                    id="año-finalizacion"
                    type="number"
                    value={año}
                    min="1900"
                    max={new Date().getFullYear() + 10}
                    step="1"
                    required
                    onChange={añadirTexto}
                />
                <label htmlFor="año-finalizacion">Año</label>
            </div>

            <div className="botones-añadir-seccion">
                <button type="button" onClick={clickAñadir}>
                    Añadir sección
                </button>

                <button type="button" onClick={clickEliminar}>
                    Eliminar {titulacion || "última formación"}
                </button>
            </div>
        </form>
    );
}

EducacionForm.propTypes = {
    añadirTexto: PropTypes.func.isRequired,
    clickAñadir: PropTypes.func.isRequired,
    clickEliminar: PropTypes.func.isRequired,
    titulacion: PropTypes.string.isRequired,
    centro: PropTypes.string.isRequired,
    año: PropTypes.string.isRequired
};
