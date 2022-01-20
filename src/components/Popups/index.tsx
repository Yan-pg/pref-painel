import Modal from "react-modal";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiX } from "react-icons/bi";

import IconSuccess from "../../assets/successIcon.svg";
import { Button } from "../Button";

import { Container, Content, Header, Body, FooterButton } from "./styles";
import { Input } from "../Input";

interface PopupsProps {
  showModal: boolean;
  buttonIsValid?: boolean;
  type: string;
  onClose(): void;
  submit?(): void;
  onChangeInput?(e: React.FormEvent<HTMLDivElement>): void;
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
    height: "auto",
    border: "none",
    margin: 0,
    padding: 0,
    backgroundColor: "#FFFFFF",
  },
};

Modal.setAppElement("#root");

export function Popups({
  showModal,
  buttonIsValid,
  type,
  onClose,
  submit,
  onChangeInput,
}: PopupsProps) {
  console.log(submit)

  return (
    <>
      {showModal && <Container />}

      <Modal isOpen={showModal} style={customStyles}>
        <Content>
          <Header>
            <FiMoreHorizontal />
            <button onClick={onClose}>
              <BiX />
            </button>
          </Header>

          <Body>
            {type !== "writing" ? (
              <>
                <img src={IconSuccess} alt="Sucesso" />
                <h3>Usuario adicionado com sucesso!</h3>
                <p>Deu certo! Agora você já pode acessar o painel, bora lá?</p>
              </>
            ) : (
              <div>
                <Input
                  label="Por favor digite a nova categoria"
                  onChange={(e) => onChangeInput && onChangeInput(e)}
                />
              </div>
            )}
          </Body>
          <FooterButton onClick={() => submit && submit()}>
            <Button
              style={{
                background:
                  buttonIsValid && buttonIsValid === true
                    ? "#0C5156"
                    : "#868E96",
              }}
              text="Ok"
              showIcon={false}
            />
          </FooterButton>
        </Content>
      </Modal>
    </>
  );
}
