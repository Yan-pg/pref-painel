import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 20px;
  padding: 5px;
  max-width: 100px;

  background: #a0d2ff;
  color: #2b9aff;

  font-weight: 300;
  text-align: center;

  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    border: none;

    svg {
      color: #2b9aff;
    }

    :hover {
      cursor: pointer;
    }
  }
`;
