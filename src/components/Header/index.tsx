import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FiUser, FiPower } from "react-icons/fi";
import { AiOutlinePicRight } from "react-icons/ai";

import LogoHeader from "../../assets/logo_header.svg";
import { useAuth } from "../../hooks/Auth";

import {
  Container,
  Content,
  ContentLeft,
  ContentImg,
  DivButton,
  Button,
  ButtonInfos,
  Me,
  Avatar,
} from "./styles";

interface HeaderPros {
  selectedPage: 0 | 1 | 2;
}

export function Header({ selectedPage }: HeaderPros) {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <ContentLeft>
          <ContentImg to="/posts">
            <img src={LogoHeader} alt="logo_header" />
          </ContentImg>

          <DivButton>
            <Button to="/banners" selectedPage={selectedPage === 0}>
              {selectedPage === 0 && <span></span>}

              <ButtonInfos selectedPage={selectedPage === 0}>
                <AiOutlinePicRight />
                <p>Banner</p>
              </ButtonInfos>
            </Button>

            <Button to="/posts" selectedPage={selectedPage === 1}>
              {selectedPage === 1 && <span></span>}

              <ButtonInfos selectedPage={selectedPage === 1}>
                <AiOutlineAppstoreAdd />
                <p>Blog</p>
              </ButtonInfos>
            </Button>

            <Button to="/users" selectedPage={selectedPage === 2}>
              {selectedPage === 2 && <span></span>}

              <ButtonInfos selectedPage={selectedPage === 2}>
                <FiUser />
                <p>Usuário</p>
              </ButtonInfos>
            </Button>
          </DivButton>
        </ContentLeft>

        <Me>
          <Avatar to="/user/99840908-c2f8-4c57-b87d-0d484861dbb2">
            <img
              src={
                user?.avatar
                  ? `https://images-pref.s3.amazonaws.com/${user.avatar}`
                  : "https://avatars.githubusercontent.com/u/65233281?v=4"
              }
              alt="avatar"
            />
            <p>Yan César</p>
          </Avatar>

          <button onClick={signOut}>
            <FiPower />
          </button>
        </Me>
      </Content>
    </Container>
  );
}
