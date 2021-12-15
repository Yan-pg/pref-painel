import React from "react";
import { FiSearch } from "react-icons/fi";

import { ContainerInputSeach, IpuntSearch, ButtonSearch } from "./styled";

interface InputShearchProps extends React.HTMLAttributes<HTMLDivElement> {
  showInput?: boolean;
}

export function InputSearch({ showInput }: InputShearchProps) {
  return (
    <ContainerInputSeach>
      <IpuntSearch placeholder="O que você procura?" />
      <ButtonSearch>
        <FiSearch />
      </ButtonSearch>
    </ContainerInputSeach>
  );
}
