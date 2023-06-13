import { FC } from "react";
import "./utils/eventos.css";
import EventsCard from "./Components/EventsCard";
import useEvents from "./Hooks/useEvents";
const Events: FC = () => {
  const { Events } = useEvents();
 
  return (
    <div className="containerEvents">
      <h1 className="title">Proximos Eventos</h1>

      <div className="Events">
        {Events.map((item) => (
          <EventsCard {...item}  key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Events;
