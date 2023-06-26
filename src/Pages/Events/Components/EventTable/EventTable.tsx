import { FC } from "react";
import Table from "react-bootstrap/Table";
import "./utils/eventTable.css";
const EventTable: FC = () => {
  return (
    <>
      <h1>Fernandinho</h1>
      <Table striped bordered hover size="sm" className="Sumario">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Solicitado em</th>
            <th>Concluído em</th>
            <th>Informações Adicionais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cadastro</td>
            <td>Concluido</td>
            <td>{new Date("2023-04-12").toLocaleDateString("pt-BR")}</td>
            <td>{new Date("2023-05-12").toLocaleDateString("pt-BR")}</td>
            <td>Feito no Quioque Araujo Viana no RS</td>
          </tr>
          <tr>
            <td>Autenticação</td>
            <td>Concluido</td>
            <td>{new Date("2023-04-12").toLocaleDateString("pt-BR")}</td>
            <td>{new Date("2023-05-12").toLocaleDateString("pt-BR")}</td>
            <td>Feito no Quioque Araujo Viana no RS</td>
          </tr>
          <tr>
            <td>Compra</td>
            <td>Concluido</td>
            <td>{new Date("2023-04-12").toLocaleDateString("pt-BR")}</td>
            <td>{new Date("2023-05-12").toLocaleDateString("pt-BR")}</td>
            <td>Feito no Quioque Araujo Viana no RS</td>
          </tr>
          <tr>
            <td>Emissão</td>
            <td>Concluido</td>
            <td>{new Date("2023-04-12").toLocaleDateString("pt-BR")}</td>
            <td>{new Date("2023-05-12").toLocaleDateString("pt-BR")}</td>
            <td>Feito no Quioque Araujo Viana no RS</td>
          </tr>
          <tr>
            <td>Retirada</td>
            <td>Concluido</td>
            <td>{new Date("2023-04-12").toLocaleDateString("pt-BR")}</td>
            <td>{new Date("2023-05-12").toLocaleDateString("pt-BR")}</td>
            <td>Feito no Quioque Araujo Viana no RS</td>
          </tr>
          <tr>
            <td>Uso</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default EventTable;
