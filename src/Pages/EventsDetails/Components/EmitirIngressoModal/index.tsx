import { FC } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EmitirIngressoModalProps } from "./utils/EmitirIngressoModalProps";

const EmitirIngressoModal: FC<EmitirIngressoModalProps> = (props) => {
  const { handleClose, show } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Emissão de Ingresso</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "60%" }}
          src={require("../../../../Photos/frame.png")}
          alt=""
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmitirIngressoModal;
