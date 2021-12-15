import Modal from "react-modal";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiX } from "react-icons/bi";

import IconSuccess from "../../assets/successIcon.svg";
import { Button } from "../Button";

import { Container, Content, Header, Body, FooterButton } from "./styles";

interface PopupsProps {
  showMOdal: boolean;
  onClose(): void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 564,
    height: 488,
    border: "none",
    margin: 0,
    padding: 0,
    backgroundColor: "#FFFFFF",
  },
};

Modal.setAppElement("#root");

export function Popups({ showMOdal, onClose }: PopupsProps) {
  return (
    <>
      {showMOdal && <Container />}

      <Modal
        isOpen={showMOdal}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Content>
          <Header>
            <FiMoreHorizontal />
            <button onClick={onClose}>
              <BiX />
            </button>
          </Header>

          <Body>
            <img src={IconSuccess} alt="Sucesso" />

            <h3>Usuario adicionado com sucesso!</h3>
            <p>Deu certo! Agora você já pode acessar o painel, bora lá?</p>
          </Body>
          <FooterButton>
            <Button text="Ok" showIcon={false} />
          </FooterButton>
        </Content>
      </Modal>
    </>
  );
}
