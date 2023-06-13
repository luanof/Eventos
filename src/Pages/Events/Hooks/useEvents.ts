import { EventType } from "../../../types/EventType";

const useEvents = () => {
  const Events: EventType[] = [
    {
      id: 1,
      src: require("../../../Photos/leoPain.jpg"),
      day: 12,
      month: "Jun",
      time: "21:00",
      detalhes: "LÉO PAIN - 12/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      id: 2,
      src: require("../../../Photos/fernandinho.jpg"),
      day: 26,
      month: "Jun",
      time: "20:00",
      detalhes: "FERNANDINHO - 26/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      id: 3,
      src: require("../../../Photos/anaVitoria.jpg"),
      day: 9,
      month: "Jun",
      time: "20:00",
      detalhes: "ANAVITÓRIA- 13/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
      id: 4,
      src: require("../../../Photos/CHITÃOZINHO .jpg"),
      day: 9,
      month: "Jun",
      time: "20:00",
      detalhes: "CHITÃOZINHO & XORORÓ- 09/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
      id: 5,
      src: require("../../../Photos/Armandinho.jpg"),
      day: 17,
      month: "Jun",
      time: "21:00",
      detalhes: "ARMANDINHO - 17/06/23",
      endereco: "Araujo Viana - RS",
    },
    {
       id: 6,
      src: require("../../../Photos/cloriaGrover.jpg"),
      day: 1,
      month: "Jul",
      time: "21:30",
      detalhes: "ARMANDINHO - 01/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
       id: 7,
      src: require("../../../Photos/FABIO.jpg"),
      day: 20,
      month: "Jul",
      time: "21:30",
      detalhes: "FÁBIO JR - 20/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
       id: 8,
      src: require("../../../Photos/LULUSANTOS.jpg"),
      day: 15,
      month: "Jul",
      time: "21:00",
      detalhes: "LULU SANTOS - 15/07/23",
      endereco: "Araujo Viana - RS",
    },
    {
       id: 9,
      src: require("../../../Photos/BACO.jpg"),
      day: 30,
      month: "JuN",
      time: "21:00",
      detalhes: "BACO EXU DO BLUES - 30/06/23",
      endereco: "Araujo Viana - RS",
    },
  ];

  return {
    Events,
  };
};

export default useEvents;
