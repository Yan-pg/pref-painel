import { FiTrash } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
import { BiLink } from "react-icons/bi";

import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";

import { Container, Card, ContentCard, Buttons, DisplayFlex } from "./styles";
import { DropzoneArea } from "../../components/Dropzone";

export function Banners() {
  return (
    <>
      <Header selectedPage={0} />
      <Container>
        <TitleSection title="Banners" />

        <Card>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <ContentCard key={i}>
              {i <= 3 ? (
                <>
                  <img
                    src="https://i.pinimg.com/originals/7a/60/84/7a608417441a1c1e83e4743928cba1b4.jpg"
                    alt="img"
                  />

                  <Buttons>
                    <DisplayFlex>
                      <button>
                        <BiPencil />
                        <input type="file" accept="image/*" />
                        <span>Editar</span>
                      </button>
                      <button>
                        <FiTrash />
                        <span>Excluir</span>
                      </button>
                    </DisplayFlex>

                    <button>
                      <BiLink />
                      <span>Link</span>
                    </button>
                  </Buttons>
                </>
              ) : (
                <DropzoneArea style={{ height: 242 }} onUpload={() => {}} />
              )}
            </ContentCard>
          ))}
        </Card>
      </Container>
    </>
  );
}
