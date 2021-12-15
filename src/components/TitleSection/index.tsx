import React from 'react';

import { Container, Ball } from './styles';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function TitleSection({ title, ...rest }: TitleProps) {
  return (
    <Container>
      <Ball />
      <h1 {...rest}>{title}</h1>
    </Container>
  );
}
