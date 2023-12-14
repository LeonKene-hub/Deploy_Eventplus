import React, { useEffect, useState } from "react";
import { eventsResource, eventsTypeResource, listOnlyResource } from "../../Services/Service";
import api from "../../Services/Service";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableCom/TableCom";
import "./DetalhesEventoPage.css";
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { useParams } from "react-router-dom";

const DetalhesEventoPage = () => {
  const { idEvento } = useParams();

  const [nomeEvento, setNomeEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");

  const [comentarios, setComentarios] = useState([]);

  let idTeste = "068261f7-69dc-4d31-8c6a-092244040f93";

  useEffect(() => {
    async function TrazEvento(id) {
      try {
        //eventos
        const meuEvento = await api.get(`${eventsResource}/${id}`);
        const meuTipo = await api.get(
          `${eventsTypeResource}/${meuEvento.data.idTipoEvento}`
        );

        setNomeEvento(meuEvento.data.nomeEvento);
        setDescricao(meuEvento.data.descricao);
        setTipo(meuTipo.data.titulo);
        setData(dateFormatDbToView(meuEvento.data.dataEvento));

        const meusComentarios = await api.get(`${listOnlyResource}${id}`);
        setComentarios(meusComentarios.data);
        
      } catch (error) {
        console.log("Erro ao trazer evento, DetalhesEventoPage");
      }
    }

    TrazEvento(idEvento);
  }, []);

  return (
    <>
      <MainContent>
        <section>
          <Container>
            <Title titleText={"Destalhes do evento"} />

            <Table
              nome={nomeEvento}
              descricao={descricao}
              tipo={tipo}
              data={data}
              comentarios={comentarios}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default DetalhesEventoPage;
