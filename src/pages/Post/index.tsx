import Editor from "../../components/Editor";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TitleSection } from "../../components/TitleSection";

import {
  Container,
  Content,
  MatterTitle,
  SelectContainer,
  ContainerEditor,
} from "./styles";

export function Post() {
  return (
    <>
      <Header selectedPage={1} />
      <Container>
        <TitleSection title="Nova publicação" />

        <Content>
          <h2>Serviço de informação</h2>

          <MatterTitle>
            <Input label="Título da matéria*" />
          </MatterTitle>

          <SelectContainer>
            <h2>Serviço de informação</h2>

            <Select options={["saúde", "esporte", "educação"]} />
          </SelectContainer>

          <ContainerEditor>
            <h2>Serviço de informação</h2>

            <Editor />
          </ContainerEditor>
        </Content>
      </Container>
    </>
  );
}
