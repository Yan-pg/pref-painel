import { Container } from "./styles";

interface CategoryProps {
  id: string;
  title: string;
  created_at: string;
}

interface SelectProps {
  options: CategoryProps[];
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export function Select({ options, onChange }: SelectProps) {
  console.log(options);
  return (
    <Container onChange={(e) => onChange(e)}>
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
