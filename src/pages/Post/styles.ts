import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  margin: 0 auto;
  margin-top: 68px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
  }

  .dropzone {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 20px;
    border: 1px dashed ${(props) => props.theme.colors.blackGray};
    background-color: ${(props) => props.theme.colors.white};
    height: 200px;

    h1 {
      font-size: 1rem;
    }
  }
`;

export const MatterTitle = styled.div``;

export const SelectContainer = styled.div`
  width: 428px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContainerTags = styled.div`
  display: flex;

  div + div {
    margin-left: 20px;
  }
`;

export const ContainerEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 59px;
`;
