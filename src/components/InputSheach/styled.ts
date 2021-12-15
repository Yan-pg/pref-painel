import styled from "styled-components";

export const ContainerInputSeach = styled.div`
  height: 36px;
  border-radius: 7px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: 1px solid ${(props) => props.theme.colors.lighGray};

  @media (max-width: 700px) {
    height: 52px;
  }

  @media (min-height: 900px) {
    height: 36px;
  }
`;

export const IpuntSearch = styled.input`
  height: 36px;
  border: none;
  background: none;

  padding: 10px;
`;

export const ButtonSearch = styled.button`
  width: 36px;
  height: 36px;
  border: 0.5px solid ${(props) => props.theme.colors.lighGray};
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;

  background: ${(props) => props.theme.colors.lightGreen};

  svg {
    color: ${(props) => props.theme.colors.white};
    width: 17px;
    height: 15px;

    @media (max-width: 700px) {
      width: 32px;
      height: 30px;
    }

    @media (min-height: 900px) {
      width: 17px;
      height: 15px;
    }
  }

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.55;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 62px;
    height: 62px;
  }

  @media (min-height: 900px) {
    width: 36px;
    height: 36px;
  }
`;
