import React from "react";
import "./TableCom.css";
import { dateFormateDbToView } from "../../../Utils/stringFunctions";

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
            key={Math.random()}
          >
            <th className="tbal-data__head-title tbal-data__head-title--big">
              {nome}
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              {descricao}
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              {/* {evento.tiposEvento.titulo} */}
              {tipo}
            </th>
            <th className="tbal-data__head-title tbal-data__head-title--big">
              {/* {dateFormateDbToView(evento.dataEvento)} */}
              {data}
            </th>
          </tr>
        </thead>
      }

      <tbody>
        {comentarios.map((c) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td>{c.usuario.nome}</td>
              <td>{c.descricao}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCom;
