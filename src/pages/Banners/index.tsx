import { Header } from "../../components/Header";
import { TitleSection } from "../../components/TitleSection";

export function Banners() {
  return (
    <>
      <Header selectedPage={0} />
      {/* <Container>
        <TitleSection title="Banners" />

        {Array.from(6).map((_, i) => {
            <Card>
                <ContentCard>
                     <img src="https://i.pinimg.com/originals/7a/60/84/7a608417441a1c1e83e4743928cba1b4.jpg" alt="img" />

                     <Buttons>
                    <input type="file" />
                    <button></button>
                     </Buttons>
                </ContentCard>
            </Card>
        } )}

      </Container> */}
    </>
  );
}
