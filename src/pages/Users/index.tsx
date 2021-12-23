import { useCallback, useEffect, useState } from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import api from "../../services/api";

import { Container } from "./styles";

const titles = ["Todos usuários", "Função", "Adicionado"];

interface ContentUsersProps {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  avatar: string;
}

export function Users() {
  const [contentUsers, setContentUsers] = useState<ContentUsersProps[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [offset, setOffSet] = useState(1);

  useEffect(() => {
    api.get(`/users?offset=${offset}&limit=6`).then((response) => {
      setContentUsers(response.data);
    });
  }, [offset]);

  const search = useCallback(async () => {
    const response = await api.get(`/users?search=${searchValue}`);
    setContentUsers(response.data);
  }, [searchValue]);

  const change = useCallback((e: any) => {
    setSearchValue(e.target.value);
  }, []);

  const onChangePageNext = useCallback(async () => {
    setOffSet(offset + 1);
  }, [offset]);

  const onChangePagePrev = useCallback(() => {
    setOffSet(offset - 1);
  }, [offset]);

  async function handleDeleteUser(id?: string): Promise<void> {
    try {
      await api.patch(`users/update/${id}`, { active: false });

      const response = await api.get(`/users?offset=${offset}&limit=6`);
      setContentUsers(response.data);
    } catch {
      alert("error");
    }
  }

  return (
    <>
      <Header selectedPage={2} />
      <Container>
        <ContentHeader
          title="Usuários"
          titleButton="Novo Adm"
          total={`${contentUsers.length} usuários`}
          path="/create-user"
          search={search}
          change={change}
        />

        <Table
          titles={titles}
          contentUsers={contentUsers}
          onChangePageNext={onChangePageNext}
          onChangePagePrev={onChangePagePrev}
          page={offset}
          handleDelete={handleDeleteUser}
        />
      </Container>
    </>
  );
}
