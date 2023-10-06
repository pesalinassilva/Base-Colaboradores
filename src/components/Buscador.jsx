import { useState } from "react"

const Buscador = ({resultado, listaActual}) => {
    const [busqueda, setBusqueda] = useState('')

    const guardarBusqueda = (e) => {
        setBusqueda(e.target.value)
        resultado(aplicarBusqueda)
    }
    const aplicarBusqueda = busqueda ? listaActual.filter((colaborador) => {
        return (
            colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.edad.includes(busqueda.toString()) ||
            colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.telefono.toString().includes(busqueda)
            )
        }) : listaActual 
        console.log(Buscador, aplicarBusqueda)
        //console.log(busqueda)

    //console.log(aplicarBusqueda)
    return(
        <> 
            <input 
            type="text"
            className="form-control mb-3"
            placeholder="Buscar Colaborador"
            onChange={guardarBusqueda}
            value={busqueda}
            />
        </>
    )
}

export default Buscador