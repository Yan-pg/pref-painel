import { FiTrash } from "react-icons/fi";
import { BiLink, BiX, BiPencil } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";

import { DropzoneArea } from "../../components/Dropzone";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import {
  Container,
  Card,
  ContentCard,
  Buttons,
  DisplayFlex,
  ModalOrderContainer,
  HeaderModal,
  ModalOrderContent,
  ContentImgModal,
  OrderButtons,
} from "./styles";

interface BannersProps {
  link?: string;
  image: string;
}

export function Banners() {
  const [banners, setBanners] = useState<BannersProps[] | number[]>([]);

  useEffect(() => {
    api
      .get("/banners/list")
      .then((response) => {
        const arr = [];

        for (let i = 0; i < 6 - response.data.banners.length; i++) {
          arr.push(i);
        }

        setBanners(response.data.banners.concat(arr));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleUpload = useCallback(async (file: any) => {
    const value = file.target;

    const data = new FormData();

    data.append("image", value.files[0]);

    await api.post("/banners/create", data);
    const responseGet = await api.get("/banners/list");

    const arr = [];

    for (let i = 0; i < 6 - responseGet.data.banners.length; i++) {
      arr.push(i);
    }

    setBanners(responseGet.data.banners.concat(arr));
  }, []);

  return (
    <>
      <Header selectedPage={0} />
      <Container>
        <TitleSection title="Banners" />

        <Card>
          {banners.map((banner, index) => (
            <ContentCard key={index}>
              {typeof banner !== "number" ? (
                <>
                  <img
                    src={
                      banner.image ||
                      "https://i.pinimg.com/originals/7a/60/84/7a608417441a1c1e83e4743928cba1b4.jpg"
                    }
                    alt="img"
                  />

                  <Buttons>
                    <DisplayFlex>
                      <button>
                        <BiPencil />
                        <input type="file" accept="image/*" />
                        <span>Editar</span>
                      </button>
                      <button>
                        <FiTrash />
                        <span>Excluir</span>
                      </button>
                    </DisplayFlex>

                    <button>
                      <BiLink />
                      <span>Link</span>
                    </button>
                  </Buttons>
                </>
              ) : (
                <DropzoneArea style={{ height: 242 }} onUpload={handleUpload} />
              )}
            </ContentCard>
          ))}
        </Card>
      </Container>

      <ModalOrderContainer>
        <HeaderModal>
          <button>
            <BiX size={30} color="#fff" />
          </button>
        </HeaderModal>
        <ModalOrderContent>
          <p>ORDEM PRÉ-DEFINIDAS</p>

          {banners.map((banner, index, arr) => {
            return (
              <ContentImgModal key={index}>
                {typeof banner !== "number" && (
                  <>
                    <img
                      src={
                        banner.image ||
                        "https://i.pinimg.com/originals/7a/60/84/7a608417441a1c1e83e4743928cba1b4.jpg"
                      }
                      alt="img"
                    />

                    <OrderButtons>
                      {index !== 0 && (
                        <button>
                          <FaAngleUp size={18} color="#343A40" />
                        </button>
                      )}
                      {index !== arr.length - 1 && (
                        <button>
                          <FaAngleDown size={18} color="#343A40" />
                        </button>
                      )}
                    </OrderButtons>
                  </>
                )}
              </ContentImgModal>
            );
          })}
        </ModalOrderContent>
      </ModalOrderContainer>
    </>
  );
}
