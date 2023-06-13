import { EventDetailsType } from "../../../types/EventDetailsType";

const useDetails = (id: string) => {
  const Events: EventDetailsType[] = [
    {
      id: 1,
      src: require("../../../Photos/leoPain.jpg"),
      evento: "LÉO PAIN - 12/06/23",
      day: "13 de Julho",
      time: "Terça às 21h00",
      descricao: "LÉO PAIN - 12/06/23",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 2,
      src: require("../../../Photos/fernandinho.jpg"),
      day: "26 de Junho",
      evento: "FERNANDINHO - 26/06/23",
      time: "Segunda às 20h00",
      descricao:
        "Fernandinho é um cantor gospel com mais de 20 anos de carreira e, recentemente, lançou seu mais novo trabalho, o Álbum Único.",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 3,
      src: require("../../../Photos/anaVitoria.jpg"),
      evento: "ANAVITÓRIA - 13/06/23",
      day: "13 de Julho",
      time: "Terça às 21h00",
      descricao: "O duo Anavitória apresenta a Turnê Namorados.",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 4,
      src: require("../../../Photos/CHITÃOZINHO .jpg"),
      day: "9 de Julho9",
      evento: "CHITÃOZINHO & XORORÓ - 09/07/23",
      time: "Domingo às 20h00",
      descricao:
        "Os reis do sertanejo retornam ao Araújo Vianna com a tour mundial em comemoração aos mais de 50 anos de carreira. Sucessos como “Galopeira”, “Fio de Cabelo” e No Rancho Fundo são alguns dos confirmados no espetáculo.",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 5,
      src: require("../../../Photos/Armandinho.jpg"),
      day: "17 de Junho",
      evento: "ARMANDINHO - 17/06/23",
      time: "Sábado às 21h00",
      descricao:
        "Após 2 anos, Armandinho está de volta ao palco do Araújo Vianna para levantar o público com todos os grandes sucessos da sua carreira, como “Outra Vida”, “Pescador”, “Sol Loiro” e muito mais!",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 6,
      src: require("../../../Photos/cloriaGrover.jpg"),
      day: "1 de Julho",
      evento: "GLORIA GROOVE - 01/07/23",
      time: "Sábado às 21h30",
      descricao:
        "Glória Groove, a Lady Leste se apresenta pela primeira vez no Auditório Araújo Vianna com o show do seu disco mais recente, dançante e cheio de ritmo, que conta com hits como “Vermelho”, “Bonekinha”, “A Queda” e muito mais!",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 7,
      src: require("../../../Photos/FABIO.jpg"),
      day: "21 de Julho",
      evento: "FÁBIO JR - 21/07/23",
      time: "Sexta às 21h30",
      descricao:
        "O artista mais romântico do Brasil está de volta a Porto Alegre com a turnê que é sucesso absoluto no país. Fábio Jr. apresenta o show, já consagrado pelo público e crítica, no dia 21 de julho de 2023, no palco do Auditório Araújo Vianna. No repertório, o astro contempla grandes canções da carreira, como “Alma Gêmea”, “Só Você” e “Caça e Caçador”, que garantem todo o toque de romantismo ao show.",
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 8,
      src: require("../../../Photos/LULUSANTOS.jpg"),
      day: "15 de Julho",
      evento: "FLULU SANTOS - 15/07/23",
      time: "Sábado às 21h00",
      descricao: `De volta ao Brasil, depois da estreia nos Estados Unidos, Lulu Santos anuncia datas da sua nova turnê, "Barítono". No repertório as canções de maiores sucessos da carreira do artista e recentes lançamentos, como “Toda Forma de Amor”, “Tempos Modernos”, “Tão Bem” e muito mais!`,
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
    {
      id: 9,
      src: require("../../../Photos/BACO.jpg"),
      day: "30 de Junho",
      evento: "BACO EXU DO BLUES - 30/06/23",
      time: "Sexta às 21h00",
      descricao: `Baco está de volta ao Araújo Vianna com a tour do seu disco mais recente, “Quantas Vezes Você Já Foi Amado?”, com hits como “20 Ligações”, “Samba em Paris” e “Dois Amores”.`,
      endereco:
        "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
    },
  ];

  return {
    Event: Events.find((item) => item.id.toString() === id),
  };
};

export default useDetails;
