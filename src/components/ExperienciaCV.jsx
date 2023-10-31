export default function Experiencia(props){
    return (
        <>
            {props.experiencia.map((item) => (
                <div key={item.id}>
                    <h4 >{item.año}</h4>
                    <h4>{item.compañia}</h4>
                    <h4>{item.posicion}</h4>
                    <h4>{item.descripcion}</h4>
                    <hr />
                </div>
            ))}
        </>
    )
}