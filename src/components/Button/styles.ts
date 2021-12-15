import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme.colors.lightGreen};
  color: ${(props) => props.theme.colors.white};
  border: none;

  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 171px;
  height: 38px;

  border-radius: 4.5px;

  svg {
    color: ${(props) => props.theme.colors.white};
    width: 16px;
    height: 16px;
  }

  transition: 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
