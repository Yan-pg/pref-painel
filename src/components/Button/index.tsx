import React, { ButtonHTMLAttributes } from "react";
import { FiPlus } from "react-icons/fi";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  showIcon?: boolean;
}

export function Button({ text, showIcon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {showIcon && <FiPlus />}
      <span>{text}</span>
    </Container>
  );
}
