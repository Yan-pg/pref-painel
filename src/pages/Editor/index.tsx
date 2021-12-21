import { Editor } from "../../components/Editor";
import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";

import { Container } from "./styles";

export function EditorPage() {
  return (
    <>
      <Header selectedPage={1} />
      <Container>
        <TitleSection title="Escritor de post" />
        {/* <Editor /> */}
      </Container>
    </>
  );
}
