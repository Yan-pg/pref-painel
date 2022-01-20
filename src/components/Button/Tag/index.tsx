import { BiX } from "react-icons/bi";

import { Container } from './styles';

interface TagProps {
  name: string;
  removeTag?(index?: number): void;
}

export function Tag({ name, removeTag }: TagProps) {
  return (
    <Container>
      <p>{name}</p>
      {removeTag && <button onClick={() => removeTag()}>
        <BiX />
      </button>}
    </Container>
  );
}
