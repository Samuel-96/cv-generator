import PropTypes from "prop-types";
import "../styles/educacion.css";

export default function Educacion({ educacion }) {
    return (
        <>
            <h2>Educación</h2>
            <hr />

            {educacion.map((item) => (
                <div className="educacion-item" key={item.id}>
                    <h4>{item.año}</h4>
                    <h4>{item.titulacion}</h4>
                    <h4>{item.centro}</h4>
                    <hr />
                </div>
            ))}
        </>
    );
}

Educacion.propTypes = {
    educacion: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            año: PropTypes.string.isRequired,
            titulacion: PropTypes.string.isRequired,
            centro: PropTypes.string.isRequired,
        })
    ).isRequired,
};
