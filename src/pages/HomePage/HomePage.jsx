import React, { useEffect, useState } from "react";
import "./HomePage.css";

import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Title from "../../components/Title/Title";
import NextEvent from "../../components/NextEvent/NextEvent";
import Container from "../../components/Container/Container";
import api from "../../Services/Service";
import Notification from "../../components/Notification/Notification";
import { nextEventResource, previousEventResource } from "../../Services/Service";
import PreviousEvent from "../../components/PreviousEvent/PreviousEvent";


const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [notifyUser, setNotifyUser] = useState(); //Componente Notification

  // roda somente na inicialização do componente
  useEffect(() => {
    async function getNextEvents() {
      try {
        const proximos = await api.get(nextEventResource);
        const dados = await proximos.data;
        // console.log(dados);
        setNextEvents(dados); //atualiza o state

        const anteriores = await api.get(previousEventResource)
        const ant = await anteriores.data;
        setPreviousEvents(ant);

      } catch (error) {
        console.log("não trouxe os próximos eventos, verifique lá!");
        // setNotifyUser({
        //   titleNote: "Erro",
        //   textNote: `Não foi possível carregar os próximos eventos. Verifique a sua conexão com a internet`,
        //   imgIcon: "danger",
        //   imgAlt:
        //   "Imagem de ilustração de erro. Rapaz segurando um balão com símbolo x.",
        //   showMessage: true,
        // });
      }
    }

    getNextEvents(); //chama a função
  }, []);

  return (
    
    <MainContent>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>

          <Title titleText={"Proximos Eventos"}/>
          <div className="events-box">
            {nextEvents.map((e) => {
              return (
                <NextEvent
                  key={e.idEvento}
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* EVENTOS ANTERIORES*/}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Anteriores Eventos"}/>
          <div className="events-box">
            {previousEvents.map((e) => {
              return (
                <PreviousEvent
                  key={e.idEvento}
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
