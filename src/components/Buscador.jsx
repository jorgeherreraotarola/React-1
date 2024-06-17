import React, { useEffect, useRef } from "react";

function Buscador ({parametroBusqueda}) {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div className="col col-12 mt-2">
            <input className="form-control" type="text" placeholder="Filtrar Divisa" onChange={(e)=>parametroBusqueda(e.target.value)} ref={inputRef}/>
        </div>
    )
}

export default Buscador