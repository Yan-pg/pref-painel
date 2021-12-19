import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { DropzoneArea } from "../../components/Dropzone";
import Editor from "../../components/Editor";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Popups } from "../../components/Popups";
import { Select } from "../../components/Select";
import { TitleSection } from "../../components/TitleSection";
import api from "../../services/api";
import { validadeAllPost } from "../../tools/validation";
import { DisplayFlex } from "../User/styles";

import {
  Container,
  Content,
  MatterTitle,
  SelectContainer,
  ContainerEditor,
} from "./styles";

interface CategoryProps {
  id: string;
  title: string;
  created_at: string;
}

export function Post() {
  const [fileName, setFileName] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [title, setTitle] = useState("");
  const [contentPost, setContentPost] = useState("");
  const [categoriesList, setCategoriesList] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function loaderInfos() {
      const response = await api.get("/categories");
      setCategoriesList(response.data.categories);
    }

    loaderInfos();
  }, []);

  const handleUpload = useCallback((file: any) => {
    if (file) {
      const value = file.target;
      setFileName(value.files[0]);

      const url = URL.createObjectURL(value.files[0]);

      setImageUrl(url);
    }
  }, []);

  const createCategory = useCallback(async () => {
    const response = await api.post("/categories/create", { title: category });

    setCategoriesList((oldValue) => [...oldValue, response.data.category]);
    setShowModal(false);
  }, [category]);

  const handleCreatePost = useCallback(() => {
    if (
      !validadeAllPost({
        imageDescription,
        title,
        image: fileName,
        contentPost,
        category,
      })
    ) {
      return;
    }

    const data = new FormData();

    data.append("image", fileName);
    data.append("title", title);
    data.append("description", contentPost);
    data.append("category", category);
    data.append("image_description", imageDescription);

    api.post("/post/create", data);
  }, [fileName, title, contentPost, category, imageDescription]);

  return (
    <>
      <Header selectedPage={1} />
      <Container>
        <TitleSection title="Nova publicação" />

        <Content>
          <h2>Imagem principal</h2>

          {!imageUrl ? (
            <>
              <DropzoneArea onUpload={handleUpload} />
              <Input
                label="Descrição da imagem"
                onChange={(currentValue) =>
                  setImageDescription(currentValue.currentTarget.value)
                }
              />
            </>
          ) : (
            <>
              <DropzoneArea onUpload={handleUpload} />
              <Input label="Descrição da imagem" />
              <img
                style={{ maxWidth: "10%", width: "auto" }}
                src={imageUrl}
                alt="imagePost"
              />
            </>
          )}
          <h2>Serviço de informação</h2>

          <MatterTitle>
            <Input
              label="Título da matéria*"
              onChange={(currentValue) =>
                setTitle(currentValue.currentTarget.value)
              }
            />
          </MatterTitle>

          <SelectContainer>
            <h2>Serviço de informação</h2>

            <DisplayFlex>
              <Select options={categoriesList} />
              <Button
                style={{ width: "50%" }}
                text="Nova categoria"
                onClick={() => setShowModal(true)}
              />
            </DisplayFlex>
          </SelectContainer>

          <ContainerEditor>
            <h2>Serviço de informação</h2>

            <Editor
              onChange={(content: any, delta: any, source: any, editor: any) =>
                setContentPost(editor.getHTML())
              }
              text={contentPost}
            />
          </ContainerEditor>
        </Content>
      </Container>
      {showModal && (
        <Popups
          type="writing"
          showMOdal={showModal}
          onClose={() => setShowModal(false)}
          onChangeInput={(e: any) => setCategory(e.target.value)}
          buttonIsValid={category.length > 0}
          submit={createCategory}
        />
      )}
    </>
  );
}
