import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentHeader } from "../../components/ContentHeader";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { Post } from "../../interfaces";
import api from "../../services/api";

import { Container } from "./styles";

const titles = [
  "Todas notícias",
  "Assunto",
  "Administrador",
  "Data de publicação",
];

export function Posts() {
  const [offset, setOffSet] = useState(1);
  const [contentPosts, setContetPost] = useState<Post[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    api
      .get(`/post/list?user=true&offset=${offset}&limit=6`)
      .then((response) => {
        setContetPost(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [offset]);

  const search = useCallback(async () => {
    const response = await api.get(
      `/post/list?search=${searchValue}&user=true`
    );
    setContetPost(response.data.posts);
  }, [searchValue]);

  const onChangePageNext = useCallback(async () => {
    setOffSet(offset + 1);
  }, [offset]);

  const onChangePagePrev = useCallback(() => {
    setOffSet(offset - 1);
  }, [offset]);

  const handleDelete = useCallback(
    async (id: string): Promise<void> => {
      try {
        await api.delete(`post/delete/${id}`);

        const response = await api.get(
          `/post/list?user=true&offset=${offset}&limit=6`
        );
        setContetPost(response.data.posts);
      } catch {
        alert("err");
      }
    },
    [offset]
  );

  return (
    <>
      <Header selectedPage={1} />
      <Container>
        <ContentHeader
          title="Todas as notícia."
          titleButton="Nova Publicação"
          total="72 publicações"
          path="/create-post"
          change={(e: any) => setSearchValue(e.target.value)}
          search={search}
        />

        <Table
          titles={titles}
          contentPosts={contentPosts}
          onChangePageNext={onChangePageNext}
          onChangePagePrev={onChangePagePrev}
          page={offset}
          handleDelete={handleDelete}
        />
      </Container>
    </>
  );
}
