import { useEffect, useState } from 'react'
import './App.css'
import MiApi from './components/MiApi'
import TableDivisas from './components/TableDivisas'
import Buscador from './components/Buscador'

function App() {
  const [listaDivisas, setListaDivisas] = useState([])
  const [filterDivisas, setFilterDivisas] = useState([])
  const [filter, setFilter] = useState([])
  const cargaDivisas = (e) =>{
    setListaDivisas(e)
    setFilterDivisas(e)
  }
  useEffect(() => {
    setFilterDivisas(listaDivisas.filter(divisas => divisas.nombre.toLowerCase().includes(filter.toLowerCase())))
  },[filter])
  
  return (
    <>
      <MiApi listaDivisas={cargaDivisas}/>
      <main className='d-flex flex-column '>
        <h1 className='text-center mt-2'>Indicadores Economicos</h1>
        <Buscador parametroBusqueda={setFilter} />
        <TableDivisas divisas={filterDivisas} />
      </main>
    </>
  )
}

export default App
