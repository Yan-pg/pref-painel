import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: 3px;

  margin-bottom: 18px;

  h1 {
    font-weight: 800;
    color: ${(props) => props.theme.colors.blackGreen};
  }
`;

export const Ball = styled.div`
  width: 8px;
  height: 8px;

  background: ${(props) => props.theme.colors.lightGreen};
  border-radius: 4px;
`;
