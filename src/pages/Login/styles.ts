import styled, { css } from "styled-components";

interface FormContentProps {
  validateLogin: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  background: #e5e5e5;
`;

export const SessionHeader = styled.div`
  width: 100%;
  height: 50vh;

  background: linear-gradient(190.46deg, #169a76 32.89%, #0c5156 113.13%);
`;

export const LoginInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 80px;
  text-align: center;

  img {
    max-height: 92px;
    width: 90%;
    height: auto;

    margin-bottom: 30px;
  }
`;

export const LoginEnter = styled.div`
  width: 527px;
  height: 435px;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const ContentLoginEnter = styled.div`
  width: 90%;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.black};
    margin-top: 3rem;
  }
`;

export const FormContent = styled.div<FormContentProps>`
  margin-top: 3rem;

  .password-input {
    margin-top: 3.5rem;
  }

  button {
    width: 100%;
    height: 58px;

    margin-top: ${(props) => (props.validateLogin ? 2.5 : 3)}rem;

    border: 0;
    border-radius: 4.5px;

    background: #e5e5e5;

    color: ${(props) => props.theme.colors.blackGray};

    font-weight: 600;
    font-size: 0.9rem;

    ${(props) =>
      props.validateLogin &&
      css`
        background: ${props.theme.colors.blackGray};
        color: ${props.theme.colors.white};
      `}

    &:hover {
      cursor: pointer;
    }
  }

  p {
    color: red;
    margin-top: 10px;
  }
`;
