import React, { useEffect } from "react";

function MiApi ({listaDivisas}) {
  useEffect(() => {
    const busqueda = async (respuesta) =>{
      const url = `https://mindicador.cl/api`
      const response = await fetch (url)
      const dataResponse = await response.json()
      const divisas = []
      for (const key in dataResponse) {
        if (dataResponse[key].codigo) {
          divisas.push(dataResponse[key])
        }
      }
      listaDivisas(divisas)
    }
    busqueda()
  },[])
  return (<></>)
}

export default MiApi