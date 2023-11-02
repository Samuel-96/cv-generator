import "../styles/experiencia.css"

export default function Experiencia(props){
    return (
        <>
            {props.experiencia.map((item) => (
                <div key={item.id}>
                    <div className="info-trabajo">
                        <h4 >{item.año}</h4>
                        <h4>{item.compañia}</h4>
                        <h4>{item.posicion}</h4>
                    </div>
                    <p className="descripcion">{item.descripcion}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}