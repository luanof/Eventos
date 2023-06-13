import { FC } from "react";
import "./utils/eventsCard.css";
import { EventsCardProps } from "./utils/eventsCardProps";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
const EventsCard: FC<EventsCardProps> = (props) => {
  const { id, day, detalhes, endereco, month, src, time } = props;

  return (
    <Link to={`/Eventos/${id}`} className="containerEvent">
      <img className="imgEvent" src={src} alt="LeoPain" />
      <div>
        <div className="containerData">
          <p className="day">{day}</p>
          <p className="month">{month + ","}</p>
          <p className="date">{time}</p>
        </div>
        <hr className="line" />
        <div className="containerEndereco">
          <p className="titleDetails">{detalhes}</p>
          <div className="endereco">
            <IonIcon name="location-outline" />
            <p>{endereco}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventsCard;
