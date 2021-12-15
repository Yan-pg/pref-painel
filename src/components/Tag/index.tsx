import { Container } from './styles';

interface TagProps {
  name: string;
}

export function Tag({ name }: TagProps) {
  return (
    <Container>
      <p>{name}</p>
    </Container>
  );
}
