import { ContentHeader } from "../../components/ContentHeader";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";

import { Container } from "./styles";

const titles = [
  "Todas notícias",
  "Assunto",
  "Administrador",
  "Data de publicação",
];

const content = [
  {
    id: 1,
    title: "Saiba tudo sobre o novo Hospital Municipal",
    tag: "SAÚDE",
    adm: "Silvam Baleeiro",
    date: "02 de nov. 2021",
  },
  {
    id: 2,
    title: "Saiba tudo sobre o novo Hospital Municipal",
    tag: "SAÚDE",
    adm: "Silvam Baleeiro",
    date: "02 de nov. 2021",
  },
  {
    id: 4,
    title: "Saiba tudo sobre o novo Hospital Municipal",
    tag: "SAÚDE",
    adm: "Silvam Baleeiro",
    date: "02 de nov. 2021",
  },
  {
    id: 5,
    title: "Saiba tudo sobre o novo Hospital Municipal",
    tag: "SAÚDE",
    adm: "Silvam Baleeiro",
    date: "02 de nov. 2021",
  },
  {
    id: 6,
    title: "Saiba tudo sobre o novo Hospital Municipal",
    tag: "SAÚDE",
    adm: "Silvam Baleeiro",
    date: "02 de nov. 2021",
  },
];

function search() {}

function change(e: React.FormEvent<HTMLDivElement>) {
  console.log(e);
}

export function Posts() {
  return (
    <>
      <Header selectedPage={1} />
      <Container>
        <ContentHeader
          title="Todas as notícia."
          titleButton="Nova Publicação"
          total="72 publicações"
          path="/create-post"
          change={(e) => change(e)}
          search={() => {}}
        />

        <Table
          titles={titles}
          contentPosts={content}
          onChangePageNext={() => {}}
          onChangePagePrev={() => {}}
          page={1}
        />
      </Container>
    </>
  );
}
