import Buscador from "./components/Buscador"
import { useState } from "react"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import Alert from "./components/Alert"
import { BaseColaboradores } from "./BaseColaboradores"
import Titulo from "./components/Titulo"

function App() {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [busqueda, setBusqueda] = useState('')
  const [mensaje, setMensaje] = useState({
    msg: '',
    color: '',
  })

  //const [id, setId] = useState('')
  
  const agregarColaboradores = (nuevoColaborador) => {
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
  }

  const mostrarValidacion = (mensajeValidacion) => {
    setMensaje(mensajeValidacion)
  }

  const guardarId = (colaboradorId) => {
    const nuevaLista = listaColaboradores.filter(colaborador => colaborador.id != colaboradorId)
    //const nuevaLista = listaColaboradores.splice(indice,1)
    setListaColaboradores(nuevaLista)
    //console.log(listaColaboradores)
  }
  
  const aplicarBusqueda = listaColaboradores.filter((colaborador) => {
    return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.edad.includes(busqueda.toString()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.includes(busqueda.toString())
        )
  })
  
  return (
    <>
      <div className="container-fluid d-flex gap-4 justify-content-start mt-3 flex-wrap" style={{maxWidth: "80rem"}}>
        <div className="flex-grow-1">
          <Titulo />
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
          <Listado 
            colaboradores={aplicarBusqueda}
            enviarId={guardarId}  
          />
        </div>
        <div>
          <Formulario
            colaboradores={agregarColaboradores}
            validacion={mostrarValidacion}
          />
          <Alert 
            mensaje = {mensaje.msg}
            color = {mensaje.color} 
          />
        </div>
      </div>
    </>
  )
}

export default App