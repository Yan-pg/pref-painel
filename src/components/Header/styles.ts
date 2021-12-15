import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonsProps {
  selectedPage?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 62px;

  border-bottom: 1.5px solid ${(props) => props.theme.colors.lighGray};

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLeft = styled.div`
  width: 432px;
  /* width: auto; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentImg = styled(Link)``;

export const DivButton = styled.div`
  width: 156px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(Link)<ButtonsProps>`
  border: none;
  background: none;

  display: flex;
  flex-direction: column;

  position: relative;

  height: 62px;

  transition: 200ms;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.lightGreen};

    svg {
      color: ${(props) => props.theme.colors.lightGreen};
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.blackGray};

    ${(props) =>
      props.selectedPage &&
      css`
        color: ${(props) => props.theme.colors.lightGreen};
      `}
  }

  span {
    width: 92px;
    height: 6px;
    background: ${(props) => props.theme.colors.lightGreen};

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const ButtonInfos = styled.div<ButtonsProps>`
  display: flex;
  align-items: center;

  border: none;
  background: none;

  margin-top: ${(props) => (props.selectedPage ? 10 : 15)}px;

  p {
    margin-left: 21px;
    font-weight: 500;

    ${(props) =>
      props.selectedPage &&
      css`
        color: ${(props) => props.theme.colors.lightGreen};
      `}
  }

  margin-right: 53px;
`;

export const Me = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: none;
  border: none;

  img {
    width: 32px;
    height: 32px;

    border-radius: 10px;
    margin-right: 10px;
  }

  p {
    color: ${(props) => props.theme.colors.blackGray};
    margin-right: 10px;
    font-weight: 600;
  }

  svg {
    color: ${(props) => props.theme.colors.lightGreen};
    width: 16px;
    height: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
