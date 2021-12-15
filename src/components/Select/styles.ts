import styled from "styled-components";

export const Container = styled.select`
  /* -webkit-appearance: none; */
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lighGray};
  border-radius: 5px;
  background: white;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
  background: ${(props) => props.theme.colors.backgroundPage};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.lightGreen};
  }

  :blur {
    border: 1px solid ${(props) => props.theme.colors.lightGreen};
  }

  option {
    color: ${(props) => props.theme.colors.lighGray};

    &:focus {
      border: 3px solid;
    }
  }
`;
