import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import "./utils/eventsDetails.css";
import useEvents from "../../hooks/useEvents";
import EmitirIngressoModal from "./Components/EmitirIngressoModal";

const EventssDetails: FC = () => {
  const { id } = useParams();
  const { getEvent } = useEvents(id as string);

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <div className="containerImg">
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img className="EventImgDefoc" src={getEvent?.src} alt="" />
        </div>

        <img className="EventImg" src={getEvent?.src} alt="" />
      </div>
      <div className="containerDetails">
        <h1>{getEvent?.evento}</h1>
        <div className="time">
          <div>
            <IonIcon name="time-outline" />
          </div>
          <div className="containerDay">
            <p>{getEvent?.timeEvent}</p>
            <p>{getEvent?.fullDay}</p>
          </div>
        </div>
        <div className="containerendereco">
          <div>
            <IonIcon name="location-outline" />
          </div>
          <div>
            <p>{getEvent?.enderecoCompleto}</p>
          </div>
        </div>
        <hr id="line" />
        <div className="containerDescription">
          <p>DESCRIÇÃO DO EVENTO:</p>
          <p>{getEvent?.descricao}</p>
        </div>
      </div>
      <div
        className="containerBtnComprar"
        onClick={() => (getEvent?.status === "Concluindo" ? handleShow() : "")}
      >
        <button>
          {getEvent?.status ? "Emitir Ingresso" : "Comprar Ingresso"}
        </button>
      </div>

      <EmitirIngressoModal show={show} handleClose={handleClose} />
    </section>
  );
};

export default EventssDetails;
