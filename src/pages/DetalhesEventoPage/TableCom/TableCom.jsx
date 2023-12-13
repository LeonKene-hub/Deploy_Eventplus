import React from "react";
import "./TableCom.css";
import { dateFormateDbToView } from "../../../Utils/stringFunctions";

const TableCom = ({ evento, comentarios }) => {
  return (
    <table className="tbal-data">
      {evento.map((e) => {
        return (
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

            <tr className="tbal-data__head-row tbal-data__head-row--red-color" key={Math.random()}>
              <td className="tbal-data__head-title tbal-data__head-title--big">{e.nomeEvento}</td>
              <td className="tbal-data__head-title tbal-data__head-title--big">{e.descricao}</td>
              <td className="tbal-data__head-title tbal-data__head-title--big">{e.tiposEvento.titulo}</td>
              <td className="tbal-data__head-title tbal-data__head-title--big">{dateFormateDbToView(e.dataEvento)}</td>
            </tr>
          </thead>
        );
      })}

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
