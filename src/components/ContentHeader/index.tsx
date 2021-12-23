import { useEffect } from "react";
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
  search(): void;
  change(e: React.FormEvent<HTMLDivElement>): void;
}

export function ContentHeader({
  title,
  titleButton,
  total,
  path,
  search,
  change,
}: ContentHeaderProps) {
  return (
    <>
      <Container>
        <DivLeft>
          <TitleSection title={title} />
          <InputSearch onChange={(e) => change(e)} search={search} />
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
