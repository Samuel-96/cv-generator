import PropTypes from "prop-types";
import "../styles/experiencia.css";

export default function Experiencia({ experiencia }) {
    return (
        <>
            {experiencia.map((item) => (
                <div className="experiencia-item" key={item.id}>
                    <div className="info-trabajo">
                        <h4>{item.año}</h4>
                        <h4>{item.compañia}</h4>
                        <h4>{item.posicion}</h4>
                    </div>

                    <p className="descripcion">{item.descripcion}</p>
                    <hr />
                </div>
            ))}
        </>
    );
}

Experiencia.propTypes = {
    experiencia: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            año: PropTypes.string.isRequired,
            compañia: PropTypes.string.isRequired,
            posicion: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
        })
    ).isRequired,
};
