import { FC } from "react";
import { useParams } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import "./utils/eventsDetails.css";

import useDetails from "./Hooks/useDetails";
const EventsDetails: FC = () => {
  const { id } = useParams();
  const { Event } = useDetails(id as string);
 

  return (
    <section>
      <div className="containerImg">
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img className="EventImgDefoc" src={Event?.src} alt="" />
        </div>

        <img className="EventImg" src={Event?.src} alt="" />
      </div>
      <div className="containerDetails">
        <h1>{Event?.evento}</h1>
        <div className="time">
          <div>
            <IonIcon name="time-outline" />
          </div>
          <div className="containerDay">
            <p>{Event?.time}</p>
            <p>{Event?.day}</p>
          </div>
        </div>
        <div className="containerendereco">
          <div>
            <IonIcon name="location-outline" />
          </div>
          <div>
            <p>{Event?.endereco}</p>
          </div>
        </div>
        <hr id="line" />
        <div className="containerDescription">
          <p>DESCRIÇÃO DO EVENTO:</p>
          <p>{Event?.descricao}</p>
        </div>
      </div>
      <div className="containerBtnComprar">
        <button>Comprar Ingresso</button>
      </div>
    </section>
  );
};

export default EventsDetails;
