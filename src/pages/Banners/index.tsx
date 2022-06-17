import { FiTrash } from "react-icons/fi";
import { BiLink, BiX, BiPencil } from "react-icons/bi";
import { FaAngleDown, FaAngleUp, FaListAlt } from "react-icons/fa";

import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";

import { DropzoneArea } from "../../components/Dropzone";
import { Popups } from "../../components/Popups";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import {
  Container,
  Card,
  ContentCard,
  Buttons,
  ButtonShowModal,
  DisplayFlex,
  ModalOrderContainer,
  HeaderModal,
  ModalOrderContent,
  ContentImgModal,
  OrderButtons,
} from "./styles";

interface BannersProps {
  id: string;
  link?: string;
  image: string;
  position: number;
}

export function Banners() {
  const [banners, setBanners] = useState<BannersProps[] | number[]>([]);
  const [bannersOrder, setBannerOrder] = useState<BannersProps[]>([]);
  const [showModalOrder, setShowModalOrder] = useState(false);
  const [showModalLink, setShowModalLink] = useState(false);
  const [link, setLink] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    api
      .get("/banners/list")
      .then((response) => {
        const arr = [];

        for (let i = 0; i < 6 - response.data.banners.length; i++) {
          arr.push(i);
        }

        const data = response.data.banners.sort((a: any, b: any) => {
          return Number(a.position) - Number(b.position);
        });

        setBanners(data.concat(arr));
        setBannerOrder(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleUpload = useCallback(async (file: any, idBanner?: string) => {
    const value = file.target;

    const data = new FormData();

    data.append("image", value.files[0]);
    data.append("position", "1");

    if (idBanner) {
      await api.put(`/banners/update/${idBanner}`, data);
    } else {
      await api.post("/banners/create", data);
    }

    const responseGet = await api.get("/banners/list");

    const arr = [];
    const arryOrder = [];

    for (let i = 0; i < responseGet.data.banners.length; i++) {
      arryOrder.push({
        id: responseGet.data.banners[i].id,
        position: i + 1,
      });
    }

    await api.put("banners/position", arryOrder);

    for (let i = 0; i < 6 - responseGet.data.banners.length; i++) {
      arr.push(i);
    }

    setBanners(responseGet.data.banners.concat(arr));
    setBannerOrder(responseGet.data.banners);
  }, []);

  const orderBanner = useCallback(
    (diraction: "up" | "down", id: string) => {
      if (diraction === "down") {
        const indexFind = bannersOrder.findIndex((banner) => banner.id === id);

        const mountedOrder = bannersOrder.map((banner, index) => {
          if (index === indexFind) {
            banner.position = Number(banner.position) + 1;
          }

          if (index === indexFind + 1) {
            banner.position = indexFind + 1;
          }

          return banner;
        });

        const data = mountedOrder.sort((a, b) => {
          return Number(a.position) - Number(b.position);
        });

        setBannerOrder(data);
      } else {
        const indexFind = bannersOrder.findIndex((banner) => banner.id === id);

        const mountedOrder = bannersOrder.map((banner, index) => {
          if (index === indexFind) {
            banner.position = Number(banner.position) - 1;
          }

          if (index === indexFind - 1) {
            banner.position = indexFind + 1;
          }

          return banner;
        });

        const data = mountedOrder.sort((a, b) => {
          return Number(a.position) - Number(b.position);
        });

        setBannerOrder(data);
      }
    },
    [bannersOrder]
  );

  const saveOrder = useCallback(async () => {
    setShowModalOrder(false);
    const data = bannersOrder.map((banner) => {
      return {
        id: banner.id,
        position: banner.position,
      };
    });

    const response = await api.put("banners/position", data);
    const arr = [];

    for (let i = 0; i < 6 - response.data.banner.length; i++) {
      arr.push(i);
    }

    document.location.reload();
  }, [bannersOrder]);

  const deleteBanner = useCallback(async (idBanner) => {
    await api.delete(`banners/delete/${idBanner}`);

    document.location.reload();
  }, []);

  const updateLink = useCallback(async () => {
    const data = new FormData();

    data.append("post_link", `${link}`);

    await api.put(`/banners/update/${id}`, data);
  }, [link, id]);

  return (
    <>
      <Header selectedPage={0} />
      <Container>
        <TitleSection title="Banners" />
        <ButtonShowModal onClick={() => setShowModalOrder(true)}>
          <FaListAlt size={24} color="#0C5156" />
        </ButtonShowModal>
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
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleUpload(e, banner.id)}
                        />
                        <span>Editar</span>
                      </button>
                      <button onClick={() => deleteBanner(banner.id)}>
                        <FiTrash />
                        <span>Excluir</span>
                      </button>
                    </DisplayFlex>

                    <button
                      onClick={() => {
                        setId(banner.id);
                        setShowModalLink(true);
                      }}
                    >
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

      <ModalOrderContainer
        showModalOrder={showModalOrder}
        id={showModalOrder ? "FadeInAnimation" : ""}
      >
        <HeaderModal>
          <button onClick={() => saveOrder()}>
            <BiX size={30} color="#fff" />
          </button>
        </HeaderModal>
        <ModalOrderContent>
          <p>ORDEM PRÉ-DEFINIDAS</p>

          {bannersOrder.map((banner, index, arr) => {
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
                        <button onClick={() => orderBanner("up", banner.id)}>
                          <FaAngleUp size={18} color="#343A40" />
                        </button>
                      )}
                      {index !== arr.length - 1 && (
                        <button onClick={() => orderBanner("down", banner.id)}>
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

      {showModalLink && (
        <Popups
          type="writing"
          showModal={showModalLink}
          onClose={() => setShowModalLink(false)}
          onChangeInput={(e: any) => {
            setLink(e.target.value);
          }}
          buttonIsValid={true}
          labelWriting="Digite aqui o link"
          submit={() => {
            updateLink();
            setShowModalLink(false);
          }}
        />
      )}
    </>
  );
}
