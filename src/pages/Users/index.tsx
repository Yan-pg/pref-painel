import { useEffect, useState } from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import api from "../../services/api";

import { Container } from "./styles";

const titles = ["Todos usuários", "Função", "Adicionado"];

interface ContentUsersProps {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  avatar: string;
}

export function Users() {
  const [contentUsers, setContentUsers] = useState<ContentUsersProps[]>([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setContentUsers(response.data);
    });
  }, [setContentUsers]);

  return (
    <>
      <Header selectedPage={2} />
      <Container>
        <ContentHeader
          title="Usuários"
          titleButton="Novo Adm"
          total={`${contentUsers.length} usuários`}
          path="/create-user"
        />

        <Table titles={titles} contentUsers={contentUsers} />
      </Container>
    </>
  );
}
