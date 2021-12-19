import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.lighGray};
  opacity: 0.6;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;

  background: ${(props) => props.theme.colors.blackGreen};

  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.white};
    width: 24px;
    height: 24px;
  }

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 41px; */

  text-align: center;

  h3 {
    margin-top: 41px;
    width: 50%;
  }

  p {
    margin-top: 13px;
    width: 70%;
  }
`;

export const FooterButton = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 80%;
    height: 58px;

    margin-bottom: 43px;
    background: ${(props) => props.theme.colors.blackGreen};
  }
`;
