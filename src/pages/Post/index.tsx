import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Button/Tag";
import { DropzoneArea } from "../../components/Dropzone";
import { Editor } from "../../components/Editor";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Popups } from "../../components/Popups";
import { Select } from "../../components/Select";
import { TitleSection } from "../../components/TitleSection";
import { usePost } from "../../hooks/Post";
import api from "../../services/api";
import { validadeAllPost } from "../../tools/validation";
import { DisplayFlex } from "../User/styles";

import {
  Container,
  Content,
  MatterTitle,
  SelectContainer,
  ContainerTags,
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
  const [categories, setCategories] = useState<string[]>([]);
  const [imageDescription, setImageDescription] = useState("");
  const [title, setTitle] = useState("");
  const [categoriesList, setCategoriesList] = useState<CategoryProps[]>([]);
  const [categoryChange, setCategoryChange] = useState("");
  const { contentPost, setContentPost } = usePost();

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
    const response = await api.post("/categories/create", {
      title: categoryChange,
    });

    setCategoriesList((oldValue) => [...oldValue, response.data.category]);
    setCategories((oldValue) => [...oldValue, response.data.category.title]);
    setShowModal(false);
  }, [categoryChange]);

  const handleCreatePost = useCallback(async () => {
    if (
      !validadeAllPost({
        imageDescription,
        title,
        image: fileName,
        contentPost,
        category: categories,
      })
    ) {
      return;
    }

    const data = new FormData();

    data.append("image", fileName);
    data.append("title", title);
    data.append("description", contentPost);
    data.append("categories", `${categories}`);
    data.append("image_description", imageDescription);

    await api.post("/post/create", data);
    setContentPost("");
  }, [
    fileName,
    title,
    contentPost,
    categories,
    imageDescription,
    setContentPost,
  ]);

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
              <Input
                label="Descrição da imagem"
                onChange={(currentValue) =>
                  setImageDescription(currentValue.currentTarget.value)
                }
              />
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
              <Select
                options={categoriesList}
                onChange={(e) => {
                  if (categories.includes(e.target.value)) return;
                  setCategories((oldValue) => [e.target.value, ...oldValue]);
                }}
              />
              <Button
                style={{ width: "50%" }}
                text="Nova categoria"
                onClick={() => setShowModal(true)}
              />
            </DisplayFlex>
            <ContainerTags>
              {categories.map((category, index) => (
                <Tag key={index} name={category} />
              ))}
            </ContainerTags>
          </SelectContainer>

          <ContainerEditor>
            <h2>Serviço de informação</h2>

            <Editor />
          </ContainerEditor>

          <Button text="salvar" onClick={handleCreatePost} />
        </Content>
      </Container>
      {showModal && (
        <Popups
          type="writing"
          showMOdal={showModal}
          onClose={() => setShowModal(false)}
          onChangeInput={(e: any) => {
            setCategoryChange(e.target.value);
          }}
          buttonIsValid={categoryChange.length > 0}
          submit={createCategory}
        />
      )}
    </>
  );
}
