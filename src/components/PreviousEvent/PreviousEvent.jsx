import React from "react";
import "./PreviousEvent.css"

import { Tooltip } from "react-tooltip";
import { dateFormatDbToView } from "../../Utils/stringFunctions";

const PreviousEvent = ({ title, description, eventDate, idEvent }) => {
    function visualizar(idEvent) {
        alert(`Chamar o recurso para visualizar: ${idEvent}`);
    }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {dateFormatDbToView(eventDate)}
      </p>

      <a
        onClick={() => {
            visualizar(idEvent);
        }}
        className="event-card__connect-link"
      >
        Visualizar
      </a>
    </article>
  );
};

export default PreviousEvent;
