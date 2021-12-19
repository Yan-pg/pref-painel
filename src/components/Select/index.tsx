import { Container } from "./styles";

interface CategoryProps {
  id: string;
  title: string;
  created_at: string;
}

interface SelectProps {
  options: CategoryProps[];
}

export function Select({ options }: SelectProps) {
  return (
    <Container>
      <option value="valor1" disabled>
        Selecione uma categoria
      </option>
      {options.map((optionItem) => (
        <option key={optionItem.id} value={optionItem.title}>
          {optionItem.title}
        </option>
      ))}
    </Container>
  );
}
