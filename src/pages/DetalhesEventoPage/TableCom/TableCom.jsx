import React from "react";
import "./TableCom.css";

const TableCom = ({ nome, descricao, tipo, data, comentarios }) => {
  return (
    <table className="tbal-data">
      {
        <thead className="tbal-data__head">
          <tr className="tbal-data__head-row tbal-data__head-row--red-color">
            <th className="tbal-data__head-title tbal-data__head-title--big">
              Nome evento
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              Descricao
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              Tipo
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              Data do Evento
            </th>
          </tr>

          <tr
            className="tbal-data__head-row tbal-data__head-row--red-color"
          >
            <th className="tbal-data__head-title tbal-data__head-title--big">
              {nome}
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              {descricao}
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              
              {tipo}
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              
              {data}
            </th>
          </tr>
        </thead>
      }

      <tbody>
        <tr className="tbal-data__head-row">
          <td className="table-data__data table-data__data--little">Usuario</td>
          <td className="table-data__data table-data__data--little">Comentario</td>
        </tr>

        {comentarios.map((c) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="table-data__data table-data__data--little">{c.usuario.nome}</td>
              <td className="table-data__data table-data__data--little">{c.descricao}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCom;
