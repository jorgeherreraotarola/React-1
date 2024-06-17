import React from "react";

function TableDivisas ({divisas}) {
    divisas.sort(function (a, b) {
        if (a.codigo < b.codigo) {
          return 1;
        }
        if (a.codigo > b.codigo) {
          return -1;
        }
        return 0;
    });
    const formatFecha = (date)=>{
        date = new Date(date)
        const Y = date.getFullYear()
        const M = date.getMonth()+1
        const D = date.getDate()
        return `${D}-${M}-${Y}`
    }
    return (
      <div className="col col-12 mt-2">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Unidad Medida</th>
                <th scope="col">Fecha</th>
                <th scope="col">valor</th>
                </tr>
            </thead>
            <tbody>
                {divisas.map(divisa => (
                    <tr key={divisa.codigo}>
                        <td>{divisa.codigo}</td>
                        <td>{divisa.nombre}</td>
                        <td>{divisa.unidad_medida}</td>
                        <td>{formatFecha(divisa.fecha)}</td>
                        <td>{divisa.valor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
}

export default TableDivisas