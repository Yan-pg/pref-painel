import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { AiOutlinePicRight } from "react-icons/ai";

import LogoHeader from "../../assets/logo_header.svg";

import {
  Container,
  Content,
  ContentLeft,
  ContentImg,
  DivButton,
  Button,
  ButtonInfos,
  Me,
} from "./styles";
import { useAuth } from "../../hooks/Auth";

interface HeaderPros {
  selectedPage: 0 | 1 | 2;
}

export function Header({ selectedPage }: HeaderPros) {
  const { user } = useAuth();

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
          <img
            src={
              user.avatar
                ? `https://images-pref.s3.amazonaws.com/${user.avatar}`
                : "https://avatars.githubusercontent.com/u/65233281?v=4"
            }
            alt="avatar"
          />
          <p>Yan César</p>
          <FaChevronDown />
        </Me>
      </Content>
    </Container>
  );
}
