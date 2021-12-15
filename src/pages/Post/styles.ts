import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  margin: 0 auto;
  margin-top: 68px;
`;

export const Content = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 59px;

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const MatterTitle = styled.div``;

export const SelectContainer = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContainerEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
