import { FC } from "react";
import "./utils/eventos.css";
import { EventType } from "../../types/EventType";
import EventsCard from "./Components/EventsCard";
const Events: FC = () => {
  const Events: EventType[] = [
    {
      src: require("../../Photos/leoPain.jpg"),
      day: 12,
      month: "Jun",
      time: "21:00",
      detalhes: "LÉO PAIN - 12/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/fernandinho.jpg"),
      day: 26,
      month: "Jun",
      time: "20:00",
      detalhes: "FERNANDINHO - 26/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/anaVitoria.jpg"),
      day: 9,
      month: "Jun",
      time: "20:00",
      detalhes: "ANAVITÓRIA- 13/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/CHITÃOZINHO .jpg"),
      day: 9,
      month: "Jun",
      time: "20:00",
      detalhes: "CHITÃOZINHO & XORORÓ- 09/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/Armandinho.jpg"),
      day: 17,
      month: "Jun",
      time: "21:00",
      detalhes: "ARMANDINHO - 17/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/cloriaGrover.jpg"),
      day: 1,
      month: "Jul",
      time: "21:30",
      detalhes: "ARMANDINHO - 01/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/FABIO.jpg"),
      day: 20,
      month: "Jul",
      time: "21:30",
      detalhes: "FÁBIO JR - 20/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/LULUSANTOS.jpg"),
      day: 15,
      month: "Jul",
      time: "21:00",
      detalhes: "LULU SANTOS - 15/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
      src: require("../../Photos/BACO.jpg"),
      day: 30,
      month: "JuN",
      time: "21:00",
      detalhes: "BACO EXU DO BLUES - 30/06/23",
      endereco: "Araujo Viana - RS",
    },
  ];
  return (
    <div className="containerEvents">
      <h1 className="title">Eventos</h1>

      <div className="Events">
        {Events.map((item) => (
          <EventsCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Events;
