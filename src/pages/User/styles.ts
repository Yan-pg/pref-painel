import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  margin-top: 108px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    color: ${(props) => props.theme.colors.black};
  }

  button {
    align-self: flex-end;
  }
`;

export const AvatarContent = styled.div`
  position: relative;

  input {
    opacity: 0;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -50%;
    z-index: 100;

    cursor: pointer;
  }

  img {
    width: 138px;
    height: 138px;
    border-radius: 10px;
  }
`;

export const EditSvg = styled.div`
  width: 28px;
  height: 28px;
  background: ${(props) => props.theme.colors.lightGreen};

  border-radius: 14px;
  position: absolute;

  right: -10px;
  bottom: -10px;
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.white};
    width: 22px;
    height: 22px;
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
`;
