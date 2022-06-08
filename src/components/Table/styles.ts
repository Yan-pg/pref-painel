import styled, { css } from "styled-components";

interface buttonPaginationProps {
  selected: boolean;
}

export const Container = styled.table`
  margin-top: 32px;
  width: 100%;
  border-spacing: 0 1.6em;
  color: ${(props) => props.theme.colors.blackGray};

  th {
    text-align: left;

    padding: 10px;
  }

  p {
    font-weight: 600;
  }
`;

export const Header = styled.tr`
  background: #e5e5e5;
  height: 51px;

  th {
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    font-size: 1.1rem;
  }

  th:nth-child(1) {
    width: 35%;
  }
`;

export const Line = styled.tr`
  &:hover {
    cursor: pointer;
  }

  button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContainerTitle = styled.td`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: start;
  }

  img {
    width: 48px;
    height: 48px;

    border-radius: 6px;
    object-fit: cover;
    margin-left: 23px;
  }

  h3 {
    margin-left: 19px;
    max-width: 300px; // Limite maximo do texto
    /* white-space: nowrap; // Removendo quebra de linha */
    overflow: hidden; // Removendo a barra de rolagem
    text-overflow: ellipsis;
  }

  p {
    font-size: 12px;
    color: ${(props) => props.theme.colors.lighGray};
    margin-left: 19px;
    margin-top: 8px;
  }

  input[type="checkbox"] {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.colors.white};
    margin: 0;

    font: inherit;
    color: ${(props) => props.theme.colors.lightGreen};
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;

    display: grid;
    place-content: center;
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: ${(props) => props.theme.colors.lightGreen};
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;

export const Pagination = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-top: 27px;
  margin-bottom: 27px;

  padding: 30px;
`;

export const ContentPagination = styled.div`
  width: 150px;

  display: flex;
  justify-content: felx-end;
  align-items: center;

  p {
    margin-right: 20px;
  }
`;

export const ButtonPagination = styled.button<buttonPaginationProps>`
  width: 20px;
  height: 20px;

  border: none;
  background: none;

  ${(props) =>
    props.selected &&
    css`
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.colors.lighGray};
      background: ${(props) => props.theme.colors.lightGreen};
      color: ${(props) => props.theme.colors.white};
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonNextOuPrev = styled.button`
  width: 22px;
  height: 22px;

  &:hover {
    cursor: pointer;
  }

  text-align: center;

  /* display: flex; */

  svg {
    text-align: center;
    margin-top: 1.5px;
  }
`;
