import { Link } from "react-router-dom";
import { Button } from "../Button";
import { InputSearch } from "../InputSheach";
import { TitleSection } from "../TitleSection";
import { Container, DivLeft } from "./styles";

interface ContentHeaderProps {
  title: string;
  titleButton: string;
  total: string;
  path: string;
}

export function ContentHeader({
  title,
  titleButton,
  total,
  path,
}: ContentHeaderProps) {
  return (
    <>
      <Container>
        <DivLeft>
          <TitleSection title={title} />
          <InputSearch />
        </DivLeft>
        <Link to={path}>
          <Button text={titleButton} />
        </Link>
      </Container>
      <div>
        <p>{`List: ${total}`}</p>
      </div>
    </>
  );
}
