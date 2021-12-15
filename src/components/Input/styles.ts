import styled, { css } from "styled-components";

interface ContainerProps {
  success?: boolean;
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: auto;

  /* margin: 4rem 0; */
  input {
    border-top: none;
    border-left: none;
    border-right: none;

    border-bottom: 2px solid ${(props) => props.theme.colors.blackGray};

    height: 13px;

    width: 100%;
    margin-top: 10px;
    padding: 10px;

    background: ${(props) => props.theme.colors.white};

    transition: 0.4s;

    ${(props) => {
      const { error, success, theme } = props;

      if (!error && !success) {
        return css`
          border-bottom: 2px solid ${theme.colors.blackGray};
        `;
      }

      if (error && !success) {
        return css`
          border-bottom: 2px solid red;
        `;
      } else {
        return css`
          border-bottom: 2px solid ${theme.colors.lightGreen};
        `;
      }
    }}

    &:focus {
      border-top: none;
      border-left: none;
      border-right: none;

      border-bottom: 3px solid ${(props) => props.theme.colors.lightGreen};
      outline: 0;
    }
  }

  label {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.black};

    /* margin-left: 20px; */
  }
`;
