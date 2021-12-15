import { Container } from "./styles";

interface SelectProps {
  options: string[];
}

export function Select({ options }: SelectProps) {
  return (
    <Container>
      <option value="valor1" disabled>
        Selecione uma categoria
      </option>
      {options.map((optionItem) => (
        <option value={optionItem}>{optionItem}</option>
      ))}
    </Container>
  );
}
