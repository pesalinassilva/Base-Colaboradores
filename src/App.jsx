import Buscador from "./components/Buscador"
import { useState } from "react"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import Alert from "./components/Alert"
import { BaseColaboradores } from "./BaseColaboradores"
import Titulo from "./components/Titulo"

function App() {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [listaFiltrada, setListaFiltrada] = useState(BaseColaboradores)
  const [busqueda, setBusqueda] = useState('')
  const [mensaje, setMensaje] = useState({
    msg: '',
    color: '',
  })
  
  const agregarColaboradores = (nuevoColaborador) => {
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
  }

  const mostrarValidacion = (mensajeValidacion) => {
    setMensaje(mensajeValidacion)
  }

  const aplicarBusqueda = listaColaboradores.filter((colaborador) => {
    return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.edad.includes(busqueda.toString()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.toString().includes(busqueda)
        )
  })
  
  console.log(busqueda)
  return (
    <>
      <div className="row justify-content-start mt-3">
        <div className="col-8">
          <Titulo />
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
          <Listado colaboradores={aplicarBusqueda}/>
        </div>
        <div className="col-4">
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