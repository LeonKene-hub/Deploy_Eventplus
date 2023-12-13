import React, { useState } from 'react';
import {eventsResource} from "../../Services/Service";
import api from "../../Services/Service";
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import Table from "./TableCom/TableCom"
import "./DetalhesEventoPage.css"

const DetalhesEventoPage = (idEvent) => {
    const [evento, setEvento] =useState("");
    const [comentarios, setComentarios] =useState([]);

    async function TrazEvento(idEvent) {
        try {
            const meuEvento = await api.get(`${eventsResource}/${idEvent}`);
            setEvento(meuEvento.data);
        } catch (error) {
            alert("Erro ao trazer evento, DetalhesEventoPage");
        }
    }

    TrazEvento(idEvent);
    return (
        <>
            <MainContent>
                <section>
                    <Container>
                        <Title titleText={"Destalhes do evento"}/>

                        <Table
                            evento={evento}
                            comentarios={comentarios}
                        />
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default DetalhesEventoPage;