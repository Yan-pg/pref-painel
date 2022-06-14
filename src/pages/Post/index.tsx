import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
// import { Post } from "../../interfaces";
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
  const navigate = useNavigate();
  const { postId } = useParams();

  const [fileName, setFileName] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [showModalSucess, setShowModalSucess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [imageDescription, setImageDescription] = useState("");
  const [title, setTitle] = useState("");
  const [categoriesList, setCategoriesList] = useState<CategoryProps[]>([]);
  const [categoryChange, setCategoryChange] = useState("");
  const [slug, setSlug] = useState("");
  // const [post, setPost] = useState<Post>({} as Post);

  const { contentPost, setContentPost } = usePost();

  useEffect(() => {
    async function loaderInfos() {
      if (postId) {
        const postResponse = await api.get(`/post/list/${postId}`);

        const {
          image_description,
          image,
          categories: itemCategories,
          description: itemDescription,
          title: itemTitle,
          slug,
        } = postResponse.data.post;

        setImageUrl(`https://images-pref.s3.amazonaws.com/${image}`);
        setCategories([...itemCategories.map((item: any) => item.title)]);
        setImageDescription(image_description);
        setContentPost(itemDescription);
        setSlug(slug);
        setTitle(itemTitle);
      }
      const response = await api.get("/categories");
      setCategoriesList(response.data.categories);
    }

    loaderInfos();
  }, [postId, setContentPost]);

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
    try {
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

      if (fileName) {
        data.append("image", fileName);
      }

      data.append("title", title);
      data.append("description", contentPost);
      data.append("categories", `${categories}`);
      data.append("slug", `${slug}`);
      data.append("image_description", imageDescription);

      if (postId) {
        await api.put(`/post/update/${postId}`, data);
      } else {
        await api.post("/post/create", data);
      }

      setContentPost("");
      setShowModalSucess(true);
    } catch {
      alert("error");
    }
  }, [
    fileName,
    title,
    contentPost,
    categories,
    imageDescription,
    setContentPost,
    postId,
    slug,
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
                value={imageDescription}
              />
            </>
          ) : (
            <>
              <DropzoneArea onUpload={handleUpload} />
              <img
                style={{ maxWidth: "10%", width: "auto" }}
                src={imageUrl}
                alt="imagePost"
              />

              <Input
                label="Descrição da imagem"
                onChange={(currentValue) =>
                  setImageDescription(currentValue.currentTarget.value)
                }
                value={imageDescription}
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
              value={title}
            />
          </MatterTitle>

          <MatterTitle>
            <Input
              label="Slug*"
              onChange={(currentValue) => {
                let value = currentValue.currentTarget.value;

                value = value
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036F]/g, "")
                  .replace(/ /g, "-");

                setSlug(value);

                currentValue.currentTarget.value = value;
                return currentValue;
              }}
              value={slug}
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
              {categories?.map((category, index) => (
                <Tag
                  key={index}
                  name={category}
                  removeTag={() =>
                    setCategories((prevState) =>
                      prevState.filter(
                        (categoryPrev) => categoryPrev !== category
                      )
                    )
                  }
                />
              ))}
            </ContainerTags>
          </SelectContainer>

          <ContainerEditor>
            <h2>Serviço de informação</h2>

            <Editor valueItem={contentPost} />
          </ContainerEditor>

          <Button
            style={{ marginBottom: 20 }}
            text="salvar"
            onClick={handleCreatePost}
          />
        </Content>
      </Container>
      {showModal && (
        <Popups
          type="writing"
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onChangeInput={(e: any) => {
            setCategoryChange(e.target.value);
          }}
          buttonIsValid={categoryChange.length > 0}
          submit={createCategory}
        />
      )}
      {showModalSucess && (
        <Popups
          type="success"
          showModal={showModalSucess}
          onClose={() => {
            setShowModalSucess(false);
            navigate("/posts");
          }}
          buttonIsValid
        />
      )}
    </>
  );
}
