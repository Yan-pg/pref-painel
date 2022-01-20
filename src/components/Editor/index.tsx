import React, { memo, useContext, useState } from "react";
import ReactQuill, { Quill as QuillEditor } from "react-quill";
import * as Quill from "quill";

// #1 import quill-image-uploader
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize-module-react";

import "react-quill/dist/quill.snow.css";
import { PostProvider, usePost } from "../../hooks/Post";
import api from "../../services/api";
// #2 register module
QuillEditor.register("modules/imageUploader", ImageUploader);
QuillEditor.register("modules/imageResize", ImageResize);

const fullToolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ align: [] }],

  ["clean"],
  ["image"],
  ["link"],
];

interface EditorComponentProps {
  valueItem?: string
}

const EditorComponent = ({ valueItem }: EditorComponentProps) => {
  const { setContentPost } = usePost();

  const modules = {
    toolbar: fullToolbarOptions,
    imageResize: {
      parchment: QuillEditor.import("parchment"),
    },
    imageUploader: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          data.append("file", file);

          api
            .post("/upload", data)
            .then((response) => {
              resolve(response.data.urlFile);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
          // const fileReader = new FileReader();
          // console.log(fileReader);

          // fileReader.addEventListener(
          //   "load",
          //   () => {
          //     console.log("entrou");

          //     let base64ImageSrc = fileReader.result;
          //     console.log(fileReader);

          //     setTimeout(() => {
          //       resolve(base64ImageSrc);
          //       //reject('Issue uploading file');
          //     }, 1500);
          //   },
          //   false
          // );

          // if (file) {
          //   fileReader.readAsDataURL(file);
          // } else {
          //   reject("No file selected");
          // }
        });
      },
    },
  };

  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  //   "align",
  //   "imageBlot"
  // ];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      onBlur={(range, source, editor) => setContentPost(editor.getHTML())}
      defaultValue={valueItem}
    >
      <div style={{ minHeight: 213 }} className="my-editing-area" />
    </ReactQuill>
  );
};

export const Editor = memo(EditorComponent);
