import React from "react";
import { FiSearch } from "react-icons/fi";

import { ContainerInputSeach, IpuntSearch, ButtonSearch } from "./styled";

interface InputShearchProps
  extends React.HTMLAttributes<HTMLDivElement & HTMLInputElement> {
  showInput?: boolean;
  search(): void;
}

export function InputSearch({ showInput, search, ...rest }: InputShearchProps) {
  return (
    <ContainerInputSeach>
      <IpuntSearch {...rest} placeholder="O que você procura?" />
      <ButtonSearch onClick={search}>
        <FiSearch />
      </ButtonSearch>
    </ContainerInputSeach>
  );
}
