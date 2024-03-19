import React from "react";

function Table({ contador, cantidadDeTiradas }) {
  return (
    <table className="tableclass textclass">
      <tbody>
        <tr className="line-divisor-horizontal">
          <td className="line-divisor-right">X</td>
          <td className="line-divisor-right">Probabilidades</td>
          <td>Cantidad</td>
        </tr>
        {contador.map((count, index) => (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td className="textclass line-divisor-vertical line-divisor-right">
              {cantidadDeTiradas > 0
                ? ((count / cantidadDeTiradas) * 100).toFixed(1)
                : "-"}
            </td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
