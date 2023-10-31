import "../styles/educacion.css"

export default function Educacion(props){
    
     return (
        <>
            <h2>Educación</h2>
            <hr />
            {props.educacion.map((item) => (
                <div key={item.id}>
                    <h4 >{item.año}</h4>
                    <h4>{item.titulacion}</h4>
                    <h4>{item.centro}</h4>
                    <hr />
                </div>
            ))}
        </>
    )
    
}