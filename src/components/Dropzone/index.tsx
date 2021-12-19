import React from "react";
import Dropzone from "react-dropzone";

import { DropContainer } from "./styles";

interface DropzoneAreaProps extends React.HTMLProps<HTMLInputElement> {
  onUpload(file: any): void;
}

export function DropzoneArea({ onUpload }: DropzoneAreaProps) {
  return (
    <Dropzone accept="image/*">
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} onChange={onUpload} />
          <h1>Arraste ou selecione uma imagem</h1>
        </DropContainer>
      )}
    </Dropzone>
  );
}
