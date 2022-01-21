import { FiTrash } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
import { BiLink } from "react-icons/bi";

import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";

import { Container, Card, ContentCard, Buttons, DisplayFlex } from "./styles";
import { DropzoneArea } from "../../components/Dropzone";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

interface BannersProps {
  link?: string;
  image: string;
}


export function Banners() {
  const [banners, setBanners] = useState<BannersProps[] | number[]>([]);
  const [filename, setFilename] = useState<any>([]);

  useEffect(() => {
    api.get('/banners/list').then((response) => {
      const arr = []

      for (let i = 0; i < 6 - response.data.banners.length; i++) {
        arr.push(i);
      }

      console.log('asda', arr)

      setBanners(response.data.banners.concat(arr));
    }).catch(e => {
      console.log(e)
    });
  }, [])


  const handleUpload = useCallback(async (file: any) => {
    const value = file.target;
    // setFilename(value.files[0]);

    const data = new FormData();

    data.append('image', value.files[0]);

    await api.post('/banners/create', data);
    const responseGet = await api.get('/banners/list');

    const arr = []

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
              {typeof banner !== 'number' ? (
                <>
                  <img
                    src={banner.image || "https://i.pinimg.com/originals/7a/60/84/7a608417441a1c1e83e4743928cba1b4.jpg"}
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
    </>
  );
}
