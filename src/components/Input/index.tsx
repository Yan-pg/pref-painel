import React from "react";

import { Container } from "./styles";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
}

export function Input({ label, error, success, ...rest }: InputProps) {
  return (
    <Container error={error} success={success}>
      {label && <label>{label}</label>}

      <input autoComplete="new-password" type="text" {...rest} />
    </Container>
  );
}
