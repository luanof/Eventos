import { FC } from "react";
import "./utils/eventsCard.css";
import { EventsCardProps } from "./utils/eventsCardProps";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
const EventsCard: FC<EventsCardProps> = (props) => {
  const { id, day, detalhes, endereco, month, src, time, status } = props;

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
            <IonIcon name="location-outline" className="icon" />
            <p>{endereco}</p>
          </div>
        </div>
        {status && (
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "end",
              paddingRight: "5%",
              paddingBottom: "1%",
            }}
          >
            <p style={{ color: "#4ece27" }}>{status}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventsCard;
