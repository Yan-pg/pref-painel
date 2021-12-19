import styled from "styled-components";

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;
`;
