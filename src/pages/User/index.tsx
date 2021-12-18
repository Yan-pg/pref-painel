import { useCallback, useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Popups } from "../../components/Popups";
import { TitleSection } from "../../components/TitleSection";

import {
  isEmail,
  isName,
  isPassword,
  matchPassword,
  validateAll,
} from "../../tools/validation";

import {
  Container,
  Content,
  AvatarContainer,
  AvatarContent,
  EditSvg,
  DisplayFlex,
} from "./styles";

interface User {
  email: string;
  name: string;
  avatar: string;
}

export function User() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [image, setImage] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (userId) {
      api.get(`/users/${userId}`).then((response) => {
        console.log(response);
        const user = response.data;

        setImage(`https://images-pref.s3.amazonaws.com/${user.avatar}`);
        setEmail(user.email);
        setName(user.name);
      });
    }
  }, [userId]);

  const onImageChange = (event: any) => {
    const value = event.target;
    setAvatar(value.files[0]);

    const url = URL.createObjectURL(value.files[0]);

    setImage(url);
  };

  const handleCreateUser = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      try {
        if (
          !validateAll({ email, password, name, confirmPassword }) &&
          !userId
        ) {
          return;
        }

        const data = new FormData();

        data.append("email", email);
        if (!userId) {
          data.append("password", password);
        }
        data.append("avatar", avatar);
        data.append("name", name);
        data.append("permissions", "CREATE_USER, CREATE_POST, DELETE_USER");
        data.append("role", "Administrador");

        if (userId) {
          await api.patch(`/users/update/${userId}`, data);
        } else {
          await api.post(`/users${userId ? `/update/${userId}` : ""}`, data);
        }

        setShowModal(true);
      } catch (e) {
        console.log("error", e);
      }
    },
    [email, password, name, confirmPassword, avatar, userId]
  );

  return (
    <>
      <Header selectedPage={2} />

      <Container>
        <TitleSection title="Usuários" />

        <Content>
          <AvatarContainer>
            <h2>{userId ? "Meu perfil" : "Criar usuário"}</h2>
            <AvatarContent>
              <input type="file" onChange={(e) => onImageChange(e)} />
              <img
                src={
                  image ||
                  "https://avatars.githubusercontent.com/u/65233281?v=4"
                }
                alt="avatar"
              />

              <EditSvg>
                <BiPencil />
              </EditSvg>
            </AvatarContent>
          </AvatarContainer>

          <DisplayFlex>
            <Input
              label="Qual o seu e-mail ?"
              type="email"
              value={email}
              onChange={(currentValue) => {
                const email = currentValue.currentTarget.value;

                setEmail(email);
              }}
              success={isEmail(email) && !!email}
              error={!isEmail(email) && email.length > 0}
            />
            <Input
              label="Qual o seu nome ?"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              success={isName(name) || !!name}
              error={!isName(name) && name.length !== 0}
            />
          </DisplayFlex>

          <DisplayFlex>
            <Input
              type="password"
              label="Digite uma senha"
              onChange={(e) => setPassword(e.currentTarget.value)}
              success={isPassword(password)}
              error={!isPassword(password) && password.length !== 0}
              autoComplete="off"
              id="asdadasd"
            />
            <Input
              type="password"
              label="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              success={
                isPassword(confirmPassword) &&
                matchPassword(password, confirmPassword)
              }
              error={
                (!isPassword(confirmPassword) ||
                  !matchPassword(password, confirmPassword)) &&
                password.length !== 0
              }
              autoComplete="new-password"
              id="asdadasd"
            />
          </DisplayFlex>

          <Button text="Salvar" onClick={(e) => handleCreateUser(e)} />
        </Content>
      </Container>
      {showModal && (
        <Popups
          showMOdal={showModal}
          onClose={() => {
            setShowModal(false);
            navigate("/users");
          }}
        />
      )}
    </>
  );
}
