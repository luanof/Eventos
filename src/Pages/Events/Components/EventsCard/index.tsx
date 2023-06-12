import { FC } from "react";
import "./utils/eventsCard.css";
import { EventsCardProps } from "./utils/eventsCardProps";
const EventsCard: FC<EventsCardProps> = (props) => {
  const { day, detalhes, endereco, month, src, time } = props;

  return (
    <div className="containerEvent">
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
          <p className="endereco">{endereco}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
