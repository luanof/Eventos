import { FC } from "react";
import "./utils/eventos.css";
const Events: FC = () => {
  return (
    <div className="container">
      <h1 className="title">Eventos</h1>

      <div className="containerEvent">
        <img
          className="imgEvent"
          src={require("../../Photos/leoPain.jpg")}
          alt="LeoPain"
        />
        <div>
          <div className="containerData">
            <p className="day">12</p>
            <p className="month">Jun,</p>
            <p className="date">21:00</p>
          </div>
          <hr className="line" />
          <div className="containerEndereco">
            <p className="titleDetails">LÉO PAIN - 12/06/23</p>
            <p className="endereco">Araujo Viana - RS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
